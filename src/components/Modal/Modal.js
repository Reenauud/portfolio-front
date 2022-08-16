import React, { useState } from "react";
import "../Modal/Modal.css";

function Modal() {
  const [visible, setVisible] = useState(true);
  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <div>
      {visible ? (
        <div>
          <div className="modalback">
            <div className="modal">
              <div className="placementBtn">
                <button
                  type="button"
                  className="btnclose"
                  onClick={handleClick}
                >
                  X
                </button>
              </div>
              <div className="imgsnap">
                <img src="snapcode.jpg" alt="snapcode" className="snapcode" />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Modal;
