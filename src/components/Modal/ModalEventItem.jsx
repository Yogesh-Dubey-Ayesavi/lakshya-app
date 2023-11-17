/* eslint-disable react/prop-types */
import './ModalEventItem.css'

const ModalEventItem = ({ event, closeModal, handleAddToCart }) => {
  return (
    <>
        <img
            src={event.picture}
            alt={event.name}
            className="card-image"
          />
          <div id="date-price">
            <p className="card-date">
              {new Date(event.datetime).toLocaleDateString()}
            </p>
            <p className="card-price">₹ {event.amount}</p>
          </div>
          <h2>{event.name}</h2>
          <p className="card-description">{event.description}</p>
          <div className="button-container">
            <button
              className="action"
              onClick={() => {
                handleAddToCart(event);
                closeModal();
              }}
            >
              Add To Cart
            </button>
            <button className="action" onClick={closeModal}>
              Cancel
            </button>
          </div>
    </>
    )
}

export default ModalEventItem