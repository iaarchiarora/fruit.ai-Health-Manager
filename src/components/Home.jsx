import React from "react";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="app-container">
      <header className="header">
        <h1 className="title">Fruit.ai</h1>
        <p className="subtitle">It's a Health Manager Product</p>
      </header>
      <div className="grid-container">
        <a href="/chat" className="grid-item chat">
          <h3>Chat</h3>
        </a>
        <a href="/translate" className="grid-item translate">
          <h3>Google Translate</h3>
        </a>
        <a href="/faqs" className="grid-item faqs">
          <h3>FAQs</h3>
        </a>
        <a href="/about" className="grid-item about">
          <h3>About</h3>
        </a>
      </div>
    </div>
  );
};

export default Home;
