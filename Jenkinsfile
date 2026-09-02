pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out project from GitHub'
                checkout scm
            }
        }

        stage('Docker Check') {
            steps {
                bat '''
                set PATH=C:\\Users\\Deeksha\\AppData\\Local\\Programs\\DockerDesktop\\resources\\bin;%PATH%
                docker --version
                docker-compose version
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image'

                bat '''
                set PATH=C:\\Users\\Deeksha\\AppData\\Local\\Programs\\DockerDesktop\\resources\\bin;%PATH%
                docker-compose build
                '''
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying Todo application'

                bat '''
                set PATH=C:\\Users\\Deeksha\\AppData\\Local\\Programs\\DockerDesktop\\resources\\bin;%PATH%
                docker rm -f react_todo_container 2>nul
                docker-compose up -d
                '''
            }
        }

        stage('Verify') {
            steps {
                echo 'Checking Docker container'

                bat '''
                set PATH=C:\\Users\\Deeksha\\AppData\\Local\\Programs\\DockerDesktop\\resources\\bin;%PATH%
                docker ps
                '''
            }
        }
    }

    post {
        success {
            echo 'Todo List deployed successfully!'
            echo 'Application: http://localhost:3000'
        }

        failure {
            echo 'Pipeline failed. Check the console output.'
        }
    }
}