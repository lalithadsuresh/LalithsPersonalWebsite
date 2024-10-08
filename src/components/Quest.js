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

      <section className="solution-section" style={{ textAlign: 'left', width: '90%', marginBottom: '20px' }}>
        <h2>Solution</h2>
        <p>To solve the problem of superficial swiping and a lack of meaningful conversation, “Quest” proposes a blind dating app that matches users based on scribbles, favorite topics, and short introductions. Users do not view images of their match until after three messages have been exchanged by each person. This ensures that connections are formed based on personality and shared interests, encouraging deeper and more genuine interactions before physical appearance becomes a factor.</p>
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
        <p style={{ textAlign: 'left', width: '90%', margin: '10px auto' }}>
          When creating their profile, users are encouraged to write short hooks—laid-back and funny introductions, comments, or jokes that showcase a user's personality. The brevity of these statements ensures quick user engagement, making it easier for matches to start meaningful conversations in a fun and lighthearted way.
        </p>
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
        <p style={{ textAlign: 'left', width: '90%', margin: '10px auto' }}>
          Users can choose their favorite topics to discuss in order to attract like-minded matches. By discussing similar favorite hobbies and passions, users are more likely to reach out to send the first text.
        </p>
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
        <p style={{ textAlign: 'left', width: '90%', margin: '10px auto' }}>
          The "hook" fills the majority of the card. This offers viewers creative personality-based matching as opposed to appearance-based interfaces. Users also must send a message in order to send a like to ensure meaningless matching is avoided. 
        </p>
        <div className="quest-picture-container">
          <img className="quest-picture"
            src={SwipeLikes}
            style={{ width: '60%', height: 'auto' }}
            alt="Swipe Likes Feature"
          />
        </div>
      </section>

      {/* Card Movement Video */}
      <section className="card-movement-section" style={{ width: '40%', textAlign: 'center', marginBottom: '20px' }}>
        <h3>Card Movement Interaction</h3>
        <p style={{ textAlign: 'left', width: '90%', margin: '10px auto' }}>
          When viewing a card, the user scrolls the card in place. At the end of the card sequence, there are two key components: 
          <br />
          1.) Personality Drawings: While no sketch was created for this feature, it proposes that users draw a prompt-based sketch to ease any nervousness about matching. 
          <br />
          2.) Image Reveal: The two boxes at the end contain images of the user, which are only revealed after six messages have been exchanged between the user and their match.
        </p>
        <div className="quest-video-container">
          <video className="quest-video" controls style={{ width: '70%' }}>
            <source src={CardMov} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Problem Section */}
      <section className="pain-section" style={{ textAlign: 'left', width: '90%' }}>
        <h2>Pain Points</h2>
        <ul>
          <li><strong>Delayed Image Reveal:</strong> While the concept of revealing images after six messages encourages deeper conversations, some users may find the delay frustrating, particularly those who prefer knowing what their match looks like early on. This could result in a slower adoption for users who are more visually oriented.</li>
                    
          <li><strong>Limited Initial Information:</strong> Without seeing profile images or getting much information upfront, users might feel hesitant to invest time in conversations, especially if they’ve had previous negative experiences on dating apps.</li>
          
          <li><strong>User Fatigue:</strong> The requirement to exchange six messages before images are revealed might deter users who are used to more immediate feedback or visual cues, potentially leading to frustration or drop-off in engagement.</li>
        </ul>
      </section>

      <section className="future-section" style={{ textAlign: 'left', width: '90%' }}>
        <h2>Future Considerations</h2>
        <ul>
          <li><strong>Implementing a cleaner designed platform for Quest:</strong> Focus on refining the UI to enhance user experience and make interactions smoother.</li>
          
          <li><strong>Adding new prompts/features for the card:</strong> Updating and expanding prompts to keep the app engaging for users.</li>
          
          <li><strong>Designing messages, profile editing, and settings:</strong> Create intuitive interfaces for messaging, profile customization, and app settings to improve user control and personalization.</li>
        </ul>
      </section>




    </div>
  );
};
