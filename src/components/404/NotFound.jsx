// NotFound.js
import classes from './NotFound.module.css'; // Import the stylesheet

const NotFound = () => {
  return (
    <div className={classes["not-found-container"]}>
      <div className={classes["not-found-content"]}>
        <h1>404 - Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
