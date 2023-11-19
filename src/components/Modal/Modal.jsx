/* eslint-disable react/prop-types */
import { createPortal } from "react-dom";
  
import classes from "./Modal.module.css";

const Backdrop = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalOverlay = ({ children }) => {
  return <div className={classes.modal}>{children}</div>;
};

const portalElement = document.getElementById("overlays");

const Modal = ({ onClose, children }) => {
  return (
    <>
      {createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
