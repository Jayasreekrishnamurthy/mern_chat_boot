import React from "react";

import github from "../assets/github.svg";
import twitter from "../assets/twitter.svg";

const SideBar = ({ setChatLog }) => {
  const clearChat = () => {
    setChatLog([]);
  };

  return (
    <aside className="sidemenu">
      <div className="side-menu-button" onClick={clearChat}>
        <span>+</span>
        New Chat
      </div>
      <div className="project-info">
        <div className="about">
          <h2></h2>
          <p></p>
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
        </div>
        <div className="rules">
          <h2></h2>
          <p>
          </p>
        </div>
        <div className="creator">
          <h2></h2>
          {/* <a
            href="https://www.twitter.com/SumanRohitK7"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="link-icon">
              <img src={twitter} alt="twitter" />
            </div>
            <span>@SumanRohitK7</span>
          </a>
          <a
            href="https://www.github.com/RohitKS7"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="link-icon">
              <img src={github} alt="github" />
            </div>
            <span>RohitKS7</span>
          </a> */}
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
