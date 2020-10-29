pipeline {
agent any
tools{
    node 'nodejs'
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