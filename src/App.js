import React from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import background from "./background.png";

import './App.css';

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${background})`}}>
      <div className="spacer1"></div>
      <div className="banner"> 
        <div class="circle"><div className="circle-text">Cap'n Snackin</div></div>
        <div className="ants-header">Army Ants</div>
        <button className="shop"> Shop </button>
      </div>
      <div className="spacer2"></div>
      <div className="slogan"> Take charge of your cravings</div>
      <div className="spacer1" />
      <div className="about">
        <div className="twitter">
      <TwitterTimelineEmbed
          sourceType="profile"
          screenName="NSnackin"
          options={{height:400}}/>
          </div>
          <div className="about-text">
          <p>The snack your parents warned you about is back.</p>
          <p> At Cap’n Snackin, we know what it takes to survive a pandemic: food. We are dropping a limited-edition re-launch of our iconic gummy snack, Army Ants, this coming February. </p> 
          <p> During the 90s you could find a pack of Cap'n Snackin's Army Ants at every lunch table across America. As times changed, we retired the product. But you asked us to relaunch – and we listened. </p>
          <p> Army Ants brought joy to the lives of Americans – and it will do the same again. </p> 
          <p> Available for preorder now.</p>
          </div>
      </div>
      <div className="spacer1" />
      <div className="footer">
        <div className="spacer1" />
        <div className="sign-up">Sign up for the updates!</div>
        <div className="sign-up-box"> 
          <div className="sign-up-form">
Name:
        <input
          type="text"
          placeholder="Name"/>
        Email:
        <input
          type="email"
          placeholder="Email"/>
          </div>
          
        </div>
        <button className="shop"> Sign up! </button>
      </div>
    </div>
  );
}

export default App;
