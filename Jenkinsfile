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
          docker.build "${REPOSITORY_NAME}"
        }   
      }
    }

    stage('Get Tag') {
      steps {
        script {
          withCredentials([gitUsernamePassword(credentialsId: 'techmlima-github')]) {
            sh """
              set +x /* Hiding commands */
              git fetch --all --tags
              set -x /* Showing commands */
            """
            TAG_NAME = sh(returnStdout: true, script: "git tag --sort=-creatordate | head -n 1").trim()
          }
        }   
      }
    }
    
    stage('Push Image') {
        when {
            expression {
                env.BRANCH_NAME == 'main'
             }
        }

        steps {
            script {
             docker.withRegistry(
                'https://${AWS_ACCESS_KEY_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com', 
                "ecr:$AWS_DEFAULT_REGION:aws_jenkins") {
                sh """
                    set +x /* Hiding commands */                    
                    docker tag ${REPOSITORY_NAME} ${REPOSITORY_URI}${TAG_NAME}
                    docker push ${REPOSITORY_URI}${TAG_NAME}                    
                    set -x /* Showing commands */
                """
            }
          }
        }
    }
  }
}
