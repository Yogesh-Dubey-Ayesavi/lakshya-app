import { useEffect, useState } from "react";
import { lakshya } from "../../utils/supabase_helper";
import useCart from "../../hooks/useCart";
import "./Events.css";
import toast from "react-hot-toast";
import Modal from "../../components/Modal/Modal";

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
          <div key={event.id} className="card">
            <img src={event.picture} alt={event.name} className="card-image" />
            <div className="card-content">
              <h2 className="card-title">{event.name}</h2>
              <div id="date-price">
                <p className="card-date">
                  {new Date(event.datetime).toLocaleDateString()}
                </p>
                <p className="card-price">₹ {event.amount}</p>
              </div>
              <button className="action" onClick={() => openModal(event)}>
                Show More Info
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <Modal onClose={closeModal}>
          <img
            src={selectedEvent.picture}
            alt={selectedEvent.name}
            className="card-image"
          />
          <div id="date-price">
            <p className="card-date">
              {new Date(selectedEvent.datetime).toLocaleDateString()}
            </p>
            <p className="card-price">₹ {selectedEvent.amount}</p>
          </div>
          <h2>{selectedEvent.name}</h2>
          <p className="card-description">{selectedEvent.description}</p>
          <div className="button-container">
            <button
              className="action"
              onClick={() => {
                handleAddToCart(selectedEvent);
                closeModal();
              }}
            >
              Add To Cart
            </button>
            <button className="action" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Events;
