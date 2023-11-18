import React, { useEffect, useState } from "react";
import "../css_for_components/studentportal.css";

export default function AdminPortal() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/get-user-info", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          setUsername(data.username);
        } else {
          console.error("User not found");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <div className='portal-container'>
        <div className='main'>
          <div className='wrapper-portal'>
            <div className='heading'>
              <div className='heading-student-img'>
                <img src='../src/assets/profile_pic_placeholder.png' alt='' />
              </div>
              <div className='heading-student-header'>
                <h1>Welcome back, {username} </h1>
              </div>
            </div>
            <div className='student-buttons'>
              <div className='buttons'>
                <div className='button-gird'>
                  <button>
                    <a href='/assignUsers'>See/Assign Students</a>
                  </button>
                  <button>
                    <a href='/classes'>View Your Classes</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
