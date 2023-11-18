import React from "react";
import "../css_for_components/games.css";

export default function Games() {
  return (
    <div className='game-wrapper'>
      <div className='game-inner-container'>
        <h2>Your Games</h2>
        <div className='game-container'>
          <div className='game'>
            <div className='game-thumbnail'>
              <img src='../src/assets/game.png' alt='' />
            </div>
            <div className='game-name'></div>
            <button className='play-now-btn'>Play Now</button>
          </div>
          <div className='game'>
            <div className='game-thumbnail'>
              <img src='../src/assets/game.png' alt='' />
            </div>
            <div className='game-name'></div>
            <button className='play-now-btn'>Play Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
