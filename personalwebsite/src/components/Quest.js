import React from 'react';
import UXMockup from '../assets/img/UX-Mockup.png'; 

export const Quest = () => {
  return (
    <div>
      <p>UI Mockup for a blind dating app designed using Figma</p>
      <img 
        src={UXMockup} 
        style={{ width: '90%', height: '90%' }} 
        alt="UI Mockup for Blind Dating App"
      />
    </div>
    
  );
};