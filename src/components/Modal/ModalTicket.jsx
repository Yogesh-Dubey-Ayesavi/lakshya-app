/* eslint-disable react/prop-types */
import classes from './ModalTicket.module.css'

const TicketModalContent = ({ qrURL, onClose }) => {

  const handleModalClose = () => {
    onClose();
  }

  return (
    <div className={classes.modalContent}>
      <h2 className={classes.modalHeading}>
        This ticket is only valid for one scan. Please be careful.
      </h2>
      <img src={qrURL} alt="QR Code" className={classes.qrCode} />
      <button className={classes.closeButton} onClick={handleModalClose}>
        Close
      </button>
    </div>
  );
};

export default TicketModalContent;
