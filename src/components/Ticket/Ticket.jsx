/* eslint-disable react/prop-types */
import { useState } from 'react';
import Modal from '../Modal/Modal';
import ModalTicket from '../Modal/ModalTicket'
import classes from './Ticket.module.css';

const Ticket = ({ ticket, event }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const fetchTickets = async () => {
    try {
      const response = await fetch(
        `https://quickchart.io/qr?text=https://apis.ayesavi.in/?ticket=${ticket.ticket_id}&uid=${ticket.user_id}&eid=${event.id}&size=400`
      );
      // console.log(response)

      if (response.ok) {
        setQrCodeUrl(response.url);
        setIsModalOpen(true);
      } else {
        console.error('Failed to fetch QR code');
      }
    } catch (error) {
      console.error('Error fetching QR code:', error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={classes['ticket-card']}>
        <img
          src={event.picture}
          alt={event.name}
          className={classes['ticket-image']}
        />
        <div className={classes['ticket-details']}>
          <h2 className={classes['ticket-title']}>{event.name}</h2>
          <p className={classes['ticket-date']}>
            {new Date(event.datetime).toLocaleDateString()}
          </p>
          <p className={classes['ticket-price']}>Price: ₹{event.amount}</p>
          <button onClick={fetchTickets}>Activate Ticket</button>
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}> {/* to close modal from the backdrop */}
          <ModalTicket qrURL={qrCodeUrl} onClose={closeModal}/> {/* to close modal from clicking close button on the ticket body */}
        </Modal>
      )}
    </>
  );
};

export default Ticket;
