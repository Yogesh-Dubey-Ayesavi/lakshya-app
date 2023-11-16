/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import './ValidatePayment.css'

const ValidatePayment = ({img, link, amt}) => {
  const [totalPrice, setTotalPrice] = useState(amt); // Replace with your logic to calculate total price
  const [selectedFile, setSelectedFile] = useState(null);
  const qrcode = URL.createObjectURL(img)
  console.log(qrcode)

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="payment-container">
      <h1>Total Price: ₹{totalPrice}</h1>

      {link && (
        <div className="qr-code-container">
          <img src={qrcode} alt="QR Code" />
        </div>
      )}

      <p className="pay-link">
        <a href={link} target="_blank" rel="noopener noreferrer">
          Pay Now
        </a>
      </p>

      <div className="file-upload-container">
        <label htmlFor="fileInput">Upload Payment Receipt:</label>
        <br />
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default ValidatePayment;
