pipeline {
    agent any
    tools{
        nodejs 'nodejs'
    }
    stages{
        stage('Install NPM'){
            steps{
                nodejs('nodejs') {
                sh 'npm --version'
                sh 'npm run install'
                // some block
            }
                
            }
        }
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