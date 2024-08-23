import React from 'react';
import navIcon2 from "../assets/img/nav-icon2.svg";
import linkicon from "../assets/img/linkicon.png";

export const JournalLove = () => {
  return (
    <div>
      <p>
      Journal Love is an interactive blog application designed for users
      to receive positive encouragement based on their submitted blog post. All
      user sentiment analysis is done using NLTK, a natural language library for Python.
      I implemented password authentication through Django Admin and managed the blog content 
      by storing it in Django's databases.This application is my first web application. 
      <br></br>

      <em> Tech Stack: Python, Django, NLTK </em>

      <div className="social-icon-container">
        <a href="https://github.com/lalithadsuresh/JOURNAL_LOVE">
          <img src={navIcon2} className="social-icon-algoart" alt="GitHub Journal Love"/>
        </a>
        <a href="https://journallove-e9a7a6e26520.herokuapp.com/">
          <img src={linkicon} className="social-icon-algoart" alt="Journal Love Site"/>
        </a>
      </div>

    </p>
    </div>
  );
};