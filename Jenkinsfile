pipeline {
    agent any /* {
       docker {
            image 'node:6-alpine' 
            args '-p 3000:3000' 
        }

    }*/
    stages {
        stage('complie'){
            tool{
                node 'nodejs'
            }

        }
        stage('Build') { 
            steps {
                sh 'node install' 
            }
        }
    }
}