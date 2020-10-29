pipeline {
    agent any 
     tools {
                nodejs 'nodejs'
               
            }
    stages {
   
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Sonarqube') {
        environment { scannerHome = tool 'sonarqube'  }
    steps {
        withSonarQubeEnv('sonarqube') {
            sh "${scannerHome}/bin/sonar-scanner"
        }
        timeout(time: 10, unit: 'MINUTES') {
            waitForQualityGate abortPipeline: true
        }
    }
}
}
}
