import React from "react";
import "../css_for_components/profile.css";
import "../css_for_components/modal.css";

export default function Profile() {
  return (
  <>
    <div className='profile'>
        <div className='profile-wrapper'>
          <div className='profile-header'>
            <h2>
              Profile
            </h2>
            <div className='container-profile'>
                  <img className='profile-img' 
                  src='../src/assets/profile_pic_placeholder.png' 
                  alt=''
                  />
                  <div> 
                    <div className="profile-username">Username</div>
                    <div className="profile-text">
                      <div>Email</div>
                      <div>Account Type</div>
                      <div className="purple">Organisation Name</div>
                      </div>
                  </div>
            </div>
          </div>
          <div className="settings-header">
          <h2>Settings</h2>
          <div className="theme-header">
            <h2> Select Theme Colour</h2>
          </div>
          <div class="theme-selector">
            <button class="theme-button" onclick="changeTheme('blue')"></button>
            <button class="theme-button" onclick="changeTheme('green')"></button>
            <button class="theme-button" onclick="changeTheme('red')"></button>
          </div>
          </div>
        </div>
      </div>
  </>
  );
}
