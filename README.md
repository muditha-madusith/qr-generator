QR generator app using nodejs api and nextjs frontend, Aws s3 bucket using for store the qr codes.

Setup ci/cd pipeline using github actions for when get commit for the main branch auto run the workflow, build docker image and push it to dockerhub.


Application
Front-End - A web application where users can submit URLs.

API: API that receives URLs and generates QR codes. The API stores the QR codes in cloud storage(AWS S3 Bucket).

Running locally
API
The API code exists in the api directory. You can run the API server locally:

Clone this repo
Make sure you are in the my-api directory
Install the required packages: npm install
Create a .env file, and add you AWS Access and Secret key, check .env.example
Also, change the BUCKET_NAME and region to your S3 bucket name in index.js
Run the API server: nodemon index.js
Your API Server should be running on port http://localhost:3001


Front-end
The front-end code exits in the front-end-nextjs directory. You can run the front-end server locally:

Clone this repo
Make sure you are in the frontend directory
Install the dependencies: npm install
Run the NextJS Server: npm run dev
Your Front-end Server should be running on http://localhost:3000