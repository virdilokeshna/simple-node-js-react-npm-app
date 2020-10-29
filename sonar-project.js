
const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'http://sonarqubeprac.eastus2.cloudapp.azure.com:9000/',
       options : {
       'sonar.sources': '.',
       'sonar.login':'ade5d0cc09d7d8d8795335fee19e8d9b3405accd',
       'sonar.inclusions' : 'src/**' // Entry point of your code
       }
     }, () => {});
