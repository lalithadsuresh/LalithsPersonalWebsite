import React from 'react';
import UXMockup from '../assets/img/UX-Mockup.png'; 
import quest5 from '../assets/img/quest5.jpg';
import quest4 from '../assets/img/quest4.png';
import quest3 from '../assets/img/quest3.png';
import quest2 from '../assets/img/quest2.png';
import quest1 from '../assets/img/quest1.png';
import video1 from '../assets/img/video1.mov';

export const Quest = () => {
  return (
    <div className="quest-container">
      <h1>Project Overview</h1>
      <p>
        I designed this Proof of Concept project to showcase how personality-based swiping can enhance online dating, offering a more meaningful experience without compromising user engagement or enjoyment.
      </p>

      <h2 >Problem</h2>
      <p>
        We’ve all heard the phrase, 'Don’t judge a book by its cover,' and recognize the truth behind it. However, most online dating apps today trap users into doing exactly that. In today’s fast-paced online dating environment, users swipe on other users solely based on images that overwhelm the interface of the card. While the name and personality of the user are present, they are secondary to the visual aspects, making genuine connection less of a priority in the current image-based card design.
      </p>
      <ul>
        <li>Visual information > key details about the user</li>
        <li>Card swiping is superficial and too usable</li>
        <li>Users are not valued in their cards</li>
      </ul>

      <h2 >User Interview</h2>
      <p>
        As a college student with access to a large network of single friends, I conducted informal interviews to gather and understand experiences on online dating apps. I categorized common sentiments and frustrations, including:
      </p>
      <ul>
        <li>
          <b>Dating apps should be more conversational:</b> Users often match but do not engage in conversation, with many admitting they’d never send the first text.
        </li>
        <li>
          <b>Dating apps should be more personal:</b> Users admitted that they often fall into the trap of treating the experience like a game, focusing more on swiping than forming meaningful connections.
        </li>
      </ul>

      <h2 >Solution</h2>
      <p>
        To solve the problem of superficial swiping and a lack of meaningful conversation, “Quest” proposes a blind dating app that matches users based on scribbles, favorite topics, and short introductions. Users do not view images of their match until after three messages have been exchanged by each person. This ensures that connections are formed based on personality and shared interests, encouraging deeper and more genuine interactions before physical appearance becomes a factor.
      </p>

      <h2 className="center">User Flow</h2>
      <div className="center">
        <img 
          src={quest5} 
          alt="User Flow Mockup" 
          style={{ width: '40%', height: 'auto' }} 
        />
      </div>

      <h3 className="center">Sign-Up Process</h3>
      <div className="center">
        <p>
          Users create their profiles by writing short hooks—laid-back and funny introductions, comments, or jokes that showcase personality. This feature ensures quick engagement and makes starting meaningful conversations easier.
        </p>
        <img 
          src={quest4} 
          alt="Sign-Up Process Mockup" 
          style={{ width: '40%', height: 'auto' }} 
        />
      </div>

      <h3 className="center">Favorites Feature</h3>
      <div className="center">
        <p>
          Users can choose their favorite topics to discuss, attracting like-minded matches. By discussing hobbies and passions, users are more likely to engage in conversations.
        </p>
        <img 
          src={quest3} 
          alt="Favorites Feature Mockup" 
          style={{ width: '40%', height: 'auto' }} 
        />
      </div>

      <h3 className="center">Card Movement Interaction</h3>
      <div className="center">
        <p>
          When viewing a card, the user scrolls the card in place. At the end of the card sequence, there are two key components:
        </p>
        <ul>
          <li><b>Personality Drawings:</b> Prompt-based sketches ease nervousness about matching.</li>
          <li><b>Image Reveal:</b> Images of the user are revealed after six message exchanges.</li>
        </ul>
        <video 
          src={video1}  
          controls 
          style={{ width: '40%', height: 'auto', marginTop: '20px'}} 
          alt="Card Movement Interaction Video"
        >
          Your browser does not support the video tag.
        </video>
      </div>


            

      <h2 >Pain Points</h2>
      <ul>
        <li>
          <b>Delayed Image Reveal:</b> While encouraging deeper conversations, some users may find the delay frustrating.
        </li>
        <li>
          <b>Limited Initial Information:</b> Without profile images upfront, users may hesitate to invest time in conversations.
        </li>
        <li>
          <b>User Fatigue:</b> Requiring six message exchanges before revealing images may deter users used to immediate feedback.
        </li>
      </ul>

      <h2 >Future Considerations</h2>
      <ul>
        <li>Implementing a cleaner designed platform for Quest</li>
        <li>Adding new prompts/features for the card</li>
        <li>Designing messages, profile editing, and settings</li>
      </ul>

    </div>
  );
};
