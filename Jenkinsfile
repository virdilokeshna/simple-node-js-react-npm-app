pipeline {
    agent any
    tools{
        nodejs 'nodejs'
    }
    stages{
        stage('Build Project'){
            steps{
                sh 'npm run build'
            }
        }
        stage('Code Analysis'){
            steps{
                sh 'npm run sonar'
            }       
        }
    }
}    