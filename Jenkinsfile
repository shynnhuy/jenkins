pipeline {

  agent none

  environment {
    DOCKER_IMAGE = "shynnhuy/test-ci"
  }

  stages {
    stage("Test") {
      agent {
          docker {
            image 'node:latest'
          }
      }
      steps {
        sh "yarn ci"
        sh "yarn test"
      }
    }
  }

  post {
    success {
      echo "SUCCESSFUL"
    }
    failure {
      echo "FAILED"
    }
  }
}