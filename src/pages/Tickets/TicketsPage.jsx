/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { lakshya } from "../../utils/supabase_helper";
import Ticket from "../../components/Ticket/Ticket";
import classes from "./TicketsPage.module.css";

// Create a component to display user's events
const UserEventsPage = () => {
  // State to store the user's events
  const [userTickets, setUserTickets] = useState([]);

  // Effect to fetch and update user's events when the component mounts
  useEffect(() => {
    const fetchUserEvents = async () => {
      try {
        const tickets = await lakshya.getTickets();
        setUserTickets(tickets);
      } catch (error) {
        console.error("Error fetching user's events:", error.message);
      }
    };
    fetchUserEvents(); //fetches user events when the ticketspage mounts/on load
    const timer = setInterval(() => {
      fetchUserEvents();
    }, 15000); //fetches user events every 30 seconds - i personally think this is too long and should be 15 seconds
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes["ticket-container"]}>
      <h2 className={classes.heading}>Registered Events</h2>
      <div className={classes["ticket-grid"]}>
        {userTickets.map((ticket) => (
          <Ticket ticket={ticket} event={ticket.event} key={ticket.ticket_id} />
        ))}
      </div>
    </div>
  );
};

export default UserEventsPage;
