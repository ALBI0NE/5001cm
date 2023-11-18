import React from "react";
import "../css_for_components/classes.css";

export default function YourClasses() {
  return (
    <div className='class-wrapper'>
      <div className='your-classes-container'>
        <h2>Your Classes</h2>
        <div className='class-container'>
          <div className='class'>
            <div className='class-icon'>
              <img src='../src/assets/classlogo.png' alt='' />
            </div>
            <div className='class-name'>
              <p>Class Name</p>
            </div>
          </div>
          <div className='class'>
            <div className='class-icon'>
              <img src='../src/assets/classlogo.png' alt='' />
            </div>
            <div className='class-name'>
              <p>Class Name</p>
            </div>
          </div>
          <div className='class'>
            <div className='class-icon'>
              <img src='../src/assets/classlogo.png' alt='' />
            </div>
            <div className='class-name'>
              <p>Class Name</p>
            </div>
          </div>
          <div className='class'>
            <div className='class-icon'>
              <img src='../src/assets/classlogo.png' alt='' />
            </div>
            <div className='class-name'>
              <p>Class Name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
