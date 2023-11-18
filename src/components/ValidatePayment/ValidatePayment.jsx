/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { supabaseClient } from "../../utils/supabase_helper";
import classes from "./ValidatePayment.module.css";
import Modal from "../Modal/Modal";
import useCart from "../../hooks/useCart";

const ValidatePayment = ({ img, link, amt, cart, requestId }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const qrcodes = img.map((i) => URL.createObjectURL(i));
  const [isModalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const toggleModal = () => {
    setModalVisible((prev) => !prev);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      const userId = (await supabaseClient.auth.getUser()).data.user.id;
      formData.append("file", selectedFile);
      formData.append(
        "event_users",
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
        let response = await fetch(
          `${import.meta.env.VITE_PAY_VALIDATE_URL}?request_id=${requestId}`,
          {
            method: "POST",
            body: formData,
          }
        );
          
        if (response.status === 200) {
          console.log(response);
          toast("Payment Succeeded");
          clearCart()
          navigate("/");
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
      console.error("No file selected for upload");
    }
  };

  return (
    <div className={classes["payment-container"]}>
      <h1>Total Price: ₹{amt}</h1>

      {qrcodes &&
        qrcodes.map((qr) => {
          return (
            <>
              <div className={classes["qr-code-container"]}>
                {loading && (
                  <Modal onClose={toggleModal}>
                      <center>
                      <h2>Processing the payment, please wait.</h2>
                      <div className={classes["loading-spinner"]}></div>
                      </center>
                  </Modal>
                )}
                <img src={qr} className={classes.qrIMG} alt="QR Code" />
              </div>
            </>
          );
        })}

      <p className={classes["pay-link"]}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Open with UPI Apps
        </a>
      </p>

      <div className={classes["file-upload-container"]}>
        <label htmlFor="fileInput">
          Upload Payment Receipt (Must Include <u>Transcation ID</u>):
        </label>
        <input
          type="file"
          id={classes.fileInput}
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      <br />

      {!loading && <button onClick={handleUpload} id={classes.submitBtn}>Submit</button>}
    </div>
  );
};

export default ValidatePayment;
