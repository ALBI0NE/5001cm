import React from "react";
import "../css_for_components/footer.css";

export default function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='footer-content'>
          <div className='footer-left'>
            <div className='footer-left-content'>
              <h2>Useful Links</h2>
              <ul>
                <a>Home</a>
                <a>About us</a>
                <a>Articles</a>
              </ul>
            </div>
          </div>
          <div className='footer-right'>
            <div className='footer-right-content'>
              <h2>Contact Us</h2>
              <ul>
                <a href=''>Contact Us</a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
