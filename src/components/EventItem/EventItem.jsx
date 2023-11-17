/* eslint-disable react/prop-types */
const EventItem = ({ event, openModal }) => {
  return (
    <>
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
    </>
  );
};

export default EventItem;
