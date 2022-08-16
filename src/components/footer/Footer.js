import React, { useState } from "react";
import "./Footer.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaSnapchat } from "react-icons/fa";
import Modal from "../Modal/Modal";

function Footer() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div>
      {click ? <Modal /> : null}
      <div className="footer">
        <div className="ico">
          <a
            href="https://github.com/Reenauud"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className="git" />
          </a>
          <a
            href="https://www.linkedin.com/in/renaud-raymond-980114223/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className="linkedin" />
          </a>
          <FaSnapchat className="snap" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
