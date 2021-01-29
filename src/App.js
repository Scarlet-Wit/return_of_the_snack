import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="section" alt="logo" />
        <img src={logo1} className="section" alt="logo" /> */}
        <div className="section2"> 
          <button className="donate"> 
            <a href="https://www.queercovidrelief.com/" target='_blank' rel="noopener noreferrer">Donate</a></button> 
          <button className="register"> 
            <a href="https://forms.gle/2wyjJquMRffo4Zpr7" target='_blank' rel="noopener noreferrer">Register </a></button> 
        </div>
        <div className="section3">
          <h1 className="title">WHAT AND WHEN?</h1>
          <div className="columns">
            <div className="column">
              <p>Meet other ducklings</p>
              <p>Watch 3x05</p>
              <p>Play Trivia</p>
            </div>
            <div className="column">
              <p>4 pm EST</p>
              <p>5 pm EST</p>
              <p>6 pm EST</p>
            </div>
            <div className="column">
              <p>
              <a 
                  href="https://tinyurl.com/the-ducklings" 
                  target='_blank' 
                  rel="noopener noreferrer" 
                  className="link">
                zoom link</a></p>
              <p>
              <a 
                  href="https://tinyurl.com/the-ducklings" 
                  target='_blank' 
                  rel="noopener noreferrer" 
                  className="link">
                zoom link</a></p>
              <p>
              <a 
                  href="https://tinyurl.com/the-ducklings" 
                  target='_blank' 
                  rel="noopener noreferrer" 
                  className="link">
                zoom link</a></p>
              </div>
          </div>
        </div>
        {/* <img src={logo2} className="section" alt="logo" /> */}
        <button className="trivia"> 
            <a href="https://forms.gle/2wyjJquMRffo4Zpr7" target='_blank' rel="noopener noreferrer">Register </a></button> 
            <div className="section4"> 
            <h2>~ we fix what we can ~</h2>
            <br></br>
            <p>Organized by </p><p> Masha/Nothingmancer (@a_sallieri),</p> <p>Katy Carter (@thelucindac) </p> <p>and High King Elliott (@highkingelliott)</p>
            <br/>
              <p>May 2020</p>
              <br/>
            </div>

      </header>
    </div>
  );
}

export default App;
