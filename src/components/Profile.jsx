import React, { useEffect, useState } from "react";

import "../css_for_components/profile.css";
import "../css_for_components/modal.css";

export default function Profile() {
  const [userid, setUserId] = useState("");
  const [username, setUsername] = useState("");
  const [school, setSchool] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [visual, setVisual] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/get-user-info", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          setUserId(data.userID);
          setUsername(data.username);
          setSchool(data.school);
          setRole(data.role);
          setEmail(data.email);
          setVisual(data.visual);
        } else {
          console.error("User not found");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const changeTheme = (newThemeID) => {
    fetch(`http://127.0.0.1:5000/update-theme/${userid}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newVisualID: newThemeID }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log("Theme updated successfully");
        } else {
          console.error("Error updating theme");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      <div className='profile'>
        <div className='profile-wrapper'>
          <div className='profile-header'>
            <h2>Profile</h2>
            <div className='container-profile'>
              <img
                className='profile-img'
                src='../src/assets/profile_pic_placeholder.png'
                alt=''
              />
              <div>
                <div className='profile-username'>Hi {username}!</div>
                <div className='profile-text'>
                  <div>Email: {email}</div>
                  <div>Account Type: {role}</div>
                  <div className='purple'>{school}</div>
                  <div className=''>
                    Your theme is: {visual || "No Theme Selected"}{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='settings-header'>
            <h2>Settings</h2>
            <div className='theme-header'>
              <h2> Select Theme Colour</h2>
            </div>
            <div class='theme-selector'>
              <button class='theme-button' onClick={() => changeTheme(1)}>
                Dark
              </button>
              <button class='theme-button' onClick={() => changeTheme(2)}>
                White
              </button>
              <button class='theme-button' onClick={() => changeTheme(3)}>
                Purple
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
