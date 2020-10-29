pipeline {
agent any
stages{
    stage('build and scan'){
        steps{
            sh 'npm run build'
            sh 'npm run sonar'

        }
    }
}
}    