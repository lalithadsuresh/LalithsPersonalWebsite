import React from 'react';
import navIcon2 from "../assets/img/nav-icon2.svg";
import linkicon from "../assets/img/linkicon.png";
import AlbumWallImage from '../assets/img/album2.png';
import movie2 from '../assets/img/video2.mov';

export const AlbumWallGenerator = () => {
  return (
    <div>
      <h2>Album Wall Generator</h2>
      <p>
        <strong>Purpose:</strong>
        <br />
        Recently, I've been seeing room designs that incorporate these aesthetic constructions of album covers on social media. 
        As an indecisive individual (especially when it comes to room decor), I wondered if there was a way to gather inspiration 
        as to what a wall filled with the album covers I loved would look like.
      </p>
      
      <p>
        <strong>Approach + How it Works:</strong>
        <br />
        I decided to create this application to generate inspiration for album walls by using the Spotify API to query the user's 
        top tracks and retrieve images of their top albums through their favorite music. I also realized that those with roommates, 
        friends, or significant others might share the same spaces, which inspired a feature that combines the users' top tracks to 
        create a group album wall. Upon this realization, I implemented a server for groups where users can join another user's group 
        to contribute to an album wall.
      </p>
      
      <p>
        <strong>Use Cases:</strong>
        <br />
        I am currently in the process of cleaning up the backend to ensure I am following best practices before I submit my application 
        to Spotify to get my API Quota extension approved! Until then, a demo is available below so please feel free to check it out!
      </p>
      
      <div className="social-icon-container">
        <a href="https://github.com/lalithadsuresh/ALBUMWALLGENERATOR">
          <img src={navIcon2} className="social-icon-algoart" alt="GitHub Album Wall Generator" />
        </a>
        <a href="https://album-wall-generator-yfvq-5fysd3k0m-lalithadsureshs-projects.vercel.app/home">
          <img src={linkicon} className="social-icon-algoart" alt="Album Wall Generator Demo" />
        </a>
      </div>

      <strong className = 'center'> Demo:</strong>

      <div className="center">
        <video
            src={movie2}
            width={600}
            controls

        >
            Your browser does not support the video tag.
            </video>
        </div>

      <p>
        <strong>If you're curious !</strong>
        <br />
        This is what my generated album wall looks like!
      </p>
      <div className="album-wall-image">
        <img
            src={AlbumWallImage}
            alt="Generated Album Wall"
        />
    </div>
    </div>
  );
};
