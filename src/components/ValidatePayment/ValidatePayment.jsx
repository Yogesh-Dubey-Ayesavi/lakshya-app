import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { supabaseClient } from '../../utils/supabase_helper';
import './ValidatePayment.css';

const ValidatePayment = ({ img, link, amt, cart, requestId }) => {
  const [totalPrice, setTotalPrice] = useState(amt);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const qrcode = URL.createObjectURL(img);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      const userId = (await supabaseClient.auth.getUser()).data.user.id;
      formData.append('file', selectedFile);
      formData.append(
        'event_users',
        JSON.stringify(
          cart.map((e) => {
            return {
              event_id: e.id,
              user_id: userId,
            };
          })
        )
      );

      try {
        setLoading(true);

        let response = await fetch(`${import.meta.env.VITE_PAY_VALIDATE_URL}?request_id=${requestId}`, {
          method: 'POST',
          body: formData,
        });

        if (response.status === 200) {
          console.log(response);
          toast('Payment Succeeded');
          navigate('/');
        } else {
          throw response;
        }
      } catch (error) {
        toast(error?.message ?? `${await error.text()} An error occurred`);
        console.error(error);
      } finally {
        setLoading(false);
      }
    } else {
      console.error('No file selected for upload');
    }
  };

  return (
    <div className="payment-container">
      <h1>Total Price: ₹{totalPrice}</h1>

      {link && (
        <div className="qr-code-container">
          {loading && <div className="loading-spinner"></div>}
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
        <input type="file" id="fileInput" accept="image/*" onChange={handleFileChange} />
      </div>
      <br />

      {!loading && <button onClick={handleUpload}>Submit</button>}
    </div>
  );
};

export default ValidatePayment;
