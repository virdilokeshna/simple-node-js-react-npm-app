pipeline {
agent any
tools{
    nodejs 'nodejs'
}
stages{
    stage('build and scan'){
        steps{
            sh 'npm run build'
            sh 'npm run sonar'

        }
    }
}
}    