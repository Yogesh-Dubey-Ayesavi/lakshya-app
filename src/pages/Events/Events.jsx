import { useEffect, useState } from "react";
import { lakshya } from "../../utils/supabase_helper";
import useCart from "../../hooks/useCart";
import "./Events.css";
import toast from "react-hot-toast";
import Modal from "../../components/Modal/Modal";
import ModalEventItem from "../../components/Modal/ModalEventItem";
import EventItem from "../../components/EventItem/EventItem";

const Events = () => {
  const [eventList, setEventList] = useState([]);
  const { addToCart, cart } = useCart();
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    // Fetch events from your API endpoint
    try {
      lakshya.getUnregisteredEvents().then((e) => setEventList(e));
    } catch (error) {
      console.error(error);
    }
  }, []);

  const openModal = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  const handleAddToCart = (event) => {
    if (!cart.some((item) => item.id === event.id)) {
      addToCart(event);
      toast("Added to Cart");
    } else {
      toast("Event already in cart");
    }
  };

  return (
    <>
      <div id="title">Events</div>
      <div className="card-list-container">
        {eventList.map((event) => (
          <EventItem event={event} openModal={openModal} key={event} />
        ))}
      </div>

      {selectedEvent && (
        <Modal onClose={closeModal}>
          <ModalEventItem event={selectedEvent} closeModal={closeModal} handleAddToCart={handleAddToCart} />
        </Modal>
      )}
    </>
  );
};

export default Events;
