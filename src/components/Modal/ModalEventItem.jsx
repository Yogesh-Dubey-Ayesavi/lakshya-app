/* eslint-disable react/prop-types */
import classes from './ModalEventItem.module.css'

const ModalEventItem = ({ event, closeModal, handleAddToCart }) => {
  return (
    <>
        <img
            src={event.picture}
            alt={event.name}
            className={classes["card-image"]}
          />
          <div id={classes["date-price"]}>
            <p className={classes["card-date"]}>
              {new Date(event.datetime).toLocaleDateString()}
            </p>
            <p className={classes["card-price"]}>₹ {event.amount}</p>
          </div>
          <h2>{event.name}</h2>
          <p className={classes["card-description"]}>{event.description}</p>
          <div className={classes["button-container"]}>
            <button
              className={classes.action}
              onClick={() => {
                handleAddToCart(event);
                closeModal();
              }}
            >
              Add To Cart
            </button>
            <button className={classes.action} onClick={closeModal}>
              Cancel
            </button>
          </div>
    </>
    )
}

export default ModalEventItem