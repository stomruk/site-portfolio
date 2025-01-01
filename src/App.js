import React, { useState, useRef } from 'react';
import './App.css'; // Stil dosyasını ekleyelim
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Project from './components/Project/Project';

function App() {
  const contentRef = useRef(null);
  const [content, setContent] = useState(<About ref={contentRef}></About>);
  return (
    <>
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://unpkg.com/snes.css@1.0.1/dist/snes.min.css"></link>
    </head>
    <div className="container">
      <div className='button-box snes-blockquote has-plumber-bg'>
        <button onClick={() => setContent(<About ref={contentRef}></About>)} class="snes-button has-plumber-color button-size">About</button>
        <button onClick={() => setContent(<Experience ref={contentRef}></Experience>)} class="snes-button has-plumber-color button-size">Experience</button>
        <button onClick={() => setContent(<Education ref={contentRef}></Education>)} class="snes-button has-plumber-color button-size">Education</button>
        <button onClick={() => setContent(<Skills ref={contentRef}></Skills>)} class="snes-button has-plumber-color button-size">Skills</button>
        <button onClick={() => setContent(<Project ref={contentRef}></Project>)} class="snes-button has-plumber-color button-size">Projects</button>
      </div>
      <div className="content-box snes-blockquote has-plumber-bg">
        <div className='arrow-box'>
          <button className='leftArrow arrowButton' onClick={() => contentRef.current?.leftArrow()}></button>
          <button className='rightArrow arrowButton' onClick={() => contentRef.current?.rightArrow()}></button>
        </div>
        {content}
      </div>
    </div>
    </>
  );
}

export default App;
