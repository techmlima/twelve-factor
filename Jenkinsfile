pipeline {
  agent any
  tools {nodejs "node16"}  
  environment {
    REPOSITORY_NAME = 'twelve-factor-app'
    REPOSITORY_URI = "${AWS_ACCESS_KEY_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/${REPOSITORY_NAME}:"
  }
  
  stages {

    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        sh 'npx jest --detectOpenHandles --silent'
      }
    }

    stage('Build Image') {
      steps {
        script {
          IMAGE_TAG = sh(returnStdout:  true, script: "git for-each-ref --count=1 --sort=-taggerdate --format '%(tag)' refs/tags ").trim()
          echo "${IMAGE_TAG}"
          docker.build "${REPOSITORY_NAME}"
        }   
      }
    }
    
    stage('Push Image') {
        // when {
        //     expression {
        //         env.BRANCH_NAME == 'main'
        //      }
        // }

        steps {
            script { 
             echo "${IMAGE_TAG}"
             docker.withRegistry(
                'https://${AWS_ACCESS_KEY_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com', 
                "ecr:$AWS_DEFAULT_REGION:aws_jenkins") {
                sh """
                   echo ${IMAGE_TAG}
                    set +x /* Hiding commands */
                    
                    docker tag ${REPOSITORY_NAME} ${REPOSITORY_URI}${IMAGE_TAG}
                    docker push ${REPOSITORY_URI}${IMAGE_TAG}
                    
                    set -x /* Showing commands */
                """
            }
          }
        }
    }
  }
}
