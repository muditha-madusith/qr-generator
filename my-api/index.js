// Import required packages
const express = require('express');
const { S3 } = require('@aws-sdk/client-s3');
const qrcode = require('qrcode');
const dotenv = require('dotenv');
const cors = require('cors');
const { Upload } = require('@aws-sdk/lib-storage');

// Load environment variables (AWS Access Key and Secret Key)
dotenv.config();

const app = express();

// Configure CORS
app.use(cors({
    origin: 'http://localhost:3000', // Update with your frontend URL
}));

// Middleware
app.use(express.json());

// AWS S3 Configuration
const region = 'eu-north-1'; // Define the region

const s3 = new S3({
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
    },
    region: region 
});

const bucketName = 'new-qr-123'; //s3 bucket name

app.post('/generate-qr', async (req, res) => {
    try {
        const { url } = req.body;

        // Generate QR code
        const qrCode = await qrcode.toBuffer(url);

        // Create file name for S3
        const fileName = `qr_codes/${url.split('//')[1]}.png`;

        // Upload QR code to S3 using Upload from @aws-sdk/lib-storage
        const upload = new Upload({
            client: s3,
            params: {
                Bucket: bucketName,
                Key: fileName,
                Body: qrCode,
                ContentType: 'image/png',
                ACL: 'public-read',
            },
        });

        await upload.done();

        // Return the S3 URL of the uploaded QR code
        const s3Url = `https://${bucketName}.s3.${region}.amazonaws.com/${fileName}`;
        res.status(200).json({ qr_code_url: s3Url });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error generating QR code' });
    }
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
