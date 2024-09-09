# QR Code Generator Application

This is a full-stack application that generates QR codes from user-submitted URLs. The application is divided into:

**Front-End:** A Next.js-based web application where users can submit URLs.                                           
**Back-End API:** A Node.js API that receives URLs, generates QR codes, and stores them in an AWS S3 bucket.

The app also leverages Docker for containerization and GitHub Actions for continuous integration/continuous deployment (CI/CD). Every commit to the master branch automatically triggers a workflow that builds and pushes Docker images to Docker Hub.

**Technologies Used**
- Front-End: Next.js
- Back-End: Node.js API
- Cloud Storage: AWS S3 (for storing generated QR codes)
- CI/CD: GitHub Actions
- Containerization: Docker


**Running locally API The API code exists in the api directory. You can run the API server locally:**
- Clone this repo Make sure you are in the my-api directory 
- Install the required packages: npm install
- Create a .env file, and add you AWS Access and Secret key, check .env.example 
- Also, change the BUCKET_NAME and region to your S3 bucket name in index.js 
- Run the API server: nodemon index.js 
- Your API Server should be running on port http://localhost:3001

**Front-end The front-end code exits in the front-end-nextjs directory. You can run the front-end server locally:**
- Clone this repo Make sure you are in the frontend directory 
- Install the dependencies: npm install 
- Run the NextJS Server: npm run dev 
- Your Front-end Server should be running on http://localhost:3000

## Goal

The goal is to get hands-on with DevOps practices like Containerization, CICD and monitoring.

**Secrets for GitHub Actions:**
- Set up the following GitHub secrets:
- DOCKER_USERNAME: Your Docker Hub username.
- DOCKER_PASSWORD: Your Docker Hub password.


![image](https://github.com/user-attachments/assets/36703fe7-9ead-4107-ac53-61f30d3dca49)
