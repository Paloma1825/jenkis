pipeline {
    agent any

    tools {nodejs "Nodejs"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agente2_1"
                    }
                    steps {
                        git url: 'https://github.com/Paloma1825/jenkis.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 6d8c990d-7f59-49ad-b4c3-f1afbead44c3  --parallel'
                        
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agente2_2"
                    }
                    steps {
                        git url: 'https://github.com/Paloma1825/jenkis.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 6d8c990d-7f59-49ad-b4c3-f1afbead44c3  --parallel'
                    
                    }
                }

                stage('Slave 3') {
                    agent {
                        label "Agente2_3"
                    }
                    steps {
                        git url: 'https://github.com/Paloma1825/jenkis.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 6d8c990d-7f59-49ad-b4c3-f1afbead44c3  --parallel'
                    
                    }
                }

                stage('Slave 4') {
                    agent {
                        label "Agente2_4"
                    }
                    steps {
                        git url: 'https://github.com/Paloma1825/jenkis.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 6d8c990d-7f59-49ad-b4c3-f1afbead44c3  --parallel'
                    
                    }
                }

               

                
   
                  
            }

             
        }

    }
            
}