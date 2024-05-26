import React from 'react';
import "../style/DeletePopup.css"

const DeletePopup = ({ show, onClose, onConfirm }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2 className="popup-header">Are you sure you want to delete this item?</h2>
        <button
          onClick={onClose}
          className="popup-button popup-cancel"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="popup-button popup-confirm"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default DeletePopup;