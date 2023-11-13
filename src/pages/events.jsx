import React, { useEffect, useState } from 'react';
import { lakshya, supabaseClient } from '../utils/supabase_helper';
import './events.css';



function handleLogout(){
  supabaseClient.auth.signOut();
}


const CardList = () => {

const [eventList, setEventList] = useState([]);


useEffect(() => {
  // Fetch events from your API endpoint
 try {
  lakshya.getEvents().then((e)=>setEventList(e));
 } catch (error) {
  console.error(e);
 }
}, []); // Em
  return (
    <div className="card-list-container">
      {eventList.map((event) => (
        <div key={event.id} className="card">
          <img src={event.picture} alt={event.name} className="card-image" />
          <div className="card-content">
            <h2 className="card-title">{event.name}</h2>
            <p className="card-description">{event.description}</p>
            <p className="card-date">{new Date(event.datetime).toLocaleDateString()}</p>
            <p className="card-price">₹ {event.amount}</p>
          </div>
        </div>
      ))}
      <button onClick={handleLogout}>LogOut</button>
    </div>
  );
};

export default CardList;
