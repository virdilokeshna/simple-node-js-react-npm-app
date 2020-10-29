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
        stage('Scan') { 
            steps {
                sh 'sonar-scanner -Dsonar.host.url=sonarqubeprac.eastus2.cloudapp.azure.com:9000 -Dsonar.login=ade5d0cc09d7d8d8795335fee19e8d9b3405accd' 
            }
        }
    }
}
