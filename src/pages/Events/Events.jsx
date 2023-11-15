import { useEffect, useState } from "react";
import { lakshya } from "../../utils/supabase_helper";
import { useCart } from "../../hooks/useCart";
import "./Events.css";
import toast from 'react-hot-toast';

const Events = () => {
  const [eventList, setEventList] = useState([]);
  const { addToCart } = useCart();
  const notify = () => toast('Added Event to Cart');
  
  useEffect(() => {
    // Fetch events from your API endpoint
    try {
      lakshya.getEvents().then((e) => setEventList(e));
    } catch (error) {
      console.error(error);
    }
  }, []); // Em

  const handleAddToCart = (event) => {
    notify();
    addToCart(event);
  }

  return (<>
    <div className="card-list-container">
      {eventList.map((event) => (
        <div key={event.id} className="card">
          <img src={event.picture} alt={event.name} className="card-image" />
          <div className="card-content">
            <h2 className="card-title">{event.name}</h2>
            <p className="card-description">{event.description}</p>
            <div id="date-price">
              <p className="card-date">
                {new Date(event.datetime).toLocaleDateString()}
              </p>
              <p className="card-price">₹ {event.amount}</p>
            </div>
            <button className="action" onClick={() => handleAddToCart(event)}>Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Events;