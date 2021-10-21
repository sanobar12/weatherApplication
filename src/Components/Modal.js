import React from "react";

export const Modal = ({ className, visible, setVisible, title, children }) => {
  return (
    <div className={className}>
      <div
        className="modal-wrapper"
        style={{
          transform: visible ? "translateY(0vh)" : "translateY(-100vh)",
          opacity: visible ? "1" : "0",
        }}
      >
        <div className="modal-header">
          {title}
          <span className="close-modal-btn" onClick={() => setVisible(false)}>
            ×
          </span>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};
