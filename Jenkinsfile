pipeline {
    agent any /* {
       docker {
            image 'node:6-alpine' 
            args '-p 3000:3000' 
        }

    }*/
    stages {
    
       /* stage('complie'){
           
                tools{
                node 'nodejs'
         
            }

        }*/
        stage('Build') { 
            tools {
                nodejs 'nodejs'
            }
            steps {
                sh 'npm install' 
            }
        }
        }
    }
