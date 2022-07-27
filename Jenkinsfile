pipeline {
  agent any
 
  tools {nodejs "node16"}
  
  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npx jest'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying...'
      }
    }
  }
}
