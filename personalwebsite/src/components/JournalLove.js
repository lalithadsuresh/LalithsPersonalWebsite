import React from 'react';
import navIcon2 from "../assets/img/nav-icon2.svg";
import linkicon from "../assets/img/linkicon.png";

export const JournalLove = () => {
  return (
    <div>
      <p>Welcome to Journal Love
      Journal Love is an interactive blog application designed for users
      to receive positive encouragement based on their blog post. This 
      application is my first web application.
      <br></br>

      Tech Stack: Python, Django, NLTK

        <div className="social-icon-journal-love">
          <a href="https://github.com/lalithadsuresh/JOURNAL_LOVE">
            <img src={navIcon2}/>
          </a>
        <div className="social-icon-journal-love-2">
          <a href="https://journallove-e9a7a6e26520.herokuapp.com/">
            <img src={linkicon}/>
          </a>
        </div>
        </div>

    </p>
    </div>
  );
};