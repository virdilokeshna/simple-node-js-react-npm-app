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
            tools{
                node 'nodejs'
            }
            steps {
                sh 'node install' 
            }
        }
        }
    }
