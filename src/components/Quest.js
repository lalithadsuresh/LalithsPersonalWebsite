import React from 'react';
import UXMockup from '../assets/img/UX-Mockup.png'; 
import SignUp from '../assets/img/signup.png';
import SwipeLikes from '../assets/img/swipelikes.png';
import Hook from '../assets/img/hook.png';
import Favorites from '../assets/img/favorites.png';
import CardMov from '../assets/img/card.mov';
import CardOutline from '../assets/img/cardoutline.png';
import sketch from '../assets/img/sketch2.jpg';
import sketch2 from '../assets/img/sketch.jpg';
import userflow from '../assets/img/userflow.jpg';


export const Quest = () => {
  return (
    <div className="quest-container" style={{ margin: '0', padding: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
      
      {/* Project Overview */}
      <section className="project-overview" style={{ textAlign: 'left', width: '90%' }}>
        <h2>Project Overview</h2>
        <p>I designed this Proof of Concept project to showcase how personality-based swiping can enhance online dating, offering a more meaningful experience without compromising user engagement or enjoyment.</p>
      </section>
      
      {/* Problem Section */}
      <section className="problem-section" style={{ textAlign: 'left', width: '90%' }}>
        <h2>Problem</h2>
        <p>We’ve all heard the phrase, 'Don’t judge a book by its cover,' and recognize the truth behind it. However, most online dating apps today trap users into doing exactly that. In today’s fast-paced online dating environment, users swipe on other users solely based on images that overwhelm the interface of the card. While the name and personality of the user are present, they are secondary to the visual aspects, making genuine connection less of a priority in the current image-based card design.</p>
        <ul>
          <li>Visual information > key details about the user</li>
          <li>Card swiping is superficial and too usable</li>
          <li>Users are not valued in their cards</li>
        </ul>
      </section>
      
      {/* User Interview Section */}
      <section className="user-interview-section" style={{ textAlign: 'left', width: '90%', marginBottom: '20px' }}>
        <h2>User Interview</h2>
        <p>As a college student with access to a large network of single friends, I conducted informal interviews to gather and understand experiences on online dating apps. I categorized common sentiments and frustrations, including:</p>
        <ul>
          <li><strong>Dating apps should be more conversational:</strong> Users often match but do not engage in conversation, with many admitting they’d never send the first text.</li>
          <li><strong>Dating apps should be more personal:</strong> Users admitted that they often fall into the trap of treating the experience like a game, focusing more on swiping than forming meaningful connections.</li>
        </ul>
      </section>

            {/* User Flow Section */}
            <section className="userflow-section" style={{ width: '90%', textAlign: 'center', marginBottom: '20px' }}>
        <h3>User Flow</h3>
        <div className="quest-picture-container">
          <img className="quest-picture"
            src={userflow}
            style={{ width: '60%', height: 'auto' }}
            alt="User Flow"
          />
        </div>
      </section>

      {/* Sketch Section */}
      <section className="sketch-section" style={{ width: '90%', textAlign: 'center', marginBottom: '20px' }}>
        <h3>Initial Sketch</h3>
        <div className="quest-picture-container">
          <img className="quest-picture"
            src={sketch}
            style={{ width: '60%', height: 'auto' }}
            alt="Initial Sketch"
          />
        </div>
      </section>

      {/* Final Sketch Section */}
      <section className="final-sketch-section" style={{ width: '90%', textAlign: 'center', marginBottom: '20px' }}>
        <h3>Final Sketch</h3>
        <div className="quest-picture-container">
          <img className="quest-picture"
            src={sketch2}
            style={{ width: '60%', height: 'auto' }}
            alt="Final Sketch"
          />
        </div>
      </section>


      {/* Sign-Up Process */}
      <section className="signup-section" style={{ width: '90%', textAlign: 'center', marginBottom: '20px' }}>
        <h3>Sign-Up Process</h3>
        <div className="quest-picture-container">
          <img className="quest-picture"
            src={SignUp}
            style={{ width: '60%', height: 'auto' }}
            alt="Sign-Up Process"
          />
        </div>
      </section>

      {/* Hook Feature */}
      <section className="hook-section" style={{ width: '90%', textAlign: 'center', marginBottom: '20px' }}>
        <h3>Hook Feature</h3>
        <div className="quest-picture-container">
          <img className="quest-picture"
            src={Hook}
            style={{ width: '60%', height: 'auto' }}
            alt="Hook Feature"
          />
        </div>
      </section>

      {/* Favorites Feature */}
      <section className="favorites-section" style={{ width: '90%', textAlign: 'center', marginBottom: '20px' }}>
        <h3>Favorites Feature</h3>
        <div className="quest-picture-container">
          <img className="quest-picture"
            src={Favorites}
            style={{ width: '60%', height: 'auto' }}
            alt="Favorites Feature"
          />
        </div>
      </section>

      {/* Swiping and Liking Interface */}
      <section className="swipe-likes-section" style={{ width: '90%', textAlign: 'center', marginBottom: '20px' }}>
        <h3>Swiping and Liking Interface</h3>
        <div className="quest-picture-container">
          <img className="quest-picture"
            src={SwipeLikes}
            style={{ width: '60%', height: 'auto' }}
            alt="Swipe Likes Feature"
          />
        </div>
      </section>

      {/* Card Movement Video */}
      <section className="card-movement-section" style={{ width: '90%', textAlign: 'center', marginBottom: '20px' }}>
        <h3>Card Movement Interaction</h3>
        <div className="quest-video-container">
          <video className="quest-video" controls style={{ width: '70%' }}>
            <source src={CardMov} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
};
