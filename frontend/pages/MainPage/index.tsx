import React, { useState } from 'react'
import styles from './index.module.css'
import axios from 'axios';


const MainPage = () => {
    const [url, setUrl] = useState('');
    const [qrCodeUrl, setQrCodeUrl] = useState('');
    
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
          // Adjust the URL to point to your Node.js API
          const response = await axios.post(`http://localhost:3001/generate-qr`, { url });
          setQrCodeUrl(response.data.qr_code_url);
          console.log('Response:', response);
        } catch (error) {
          console.error('Error generating QR Code:', error);
        }
      };
      
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>QR Code Generator</h1>
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL like https://example.com"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Generate QR Code</button>
    </form>
    {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code" className={styles.qrCode} />}
  </div>
  )
}

export default MainPage