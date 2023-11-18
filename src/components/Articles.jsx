import React from "react";
import "../css_for_components/articles.css";

export default function Articles() {
  return (
    <>
      <div className='articles'>
        <div className='articles-wrapper'>
          <div className='articles-header'>
            <h2>
              <span className='purple'>Articles</span>
            </h2>
          </div>
          <div className='panels'>
            <div className='grid'>
              <div className='grid-item'>
                <div className='card'>
                  <img
                    className='card-img'
                    src='../src/assets/hero_img_jpg.jpg'
                    alt=''
                  />
                  <div className='card-content'>
                    <h3 className='card-header'>Article Name</h3>
                    <p className='card-text'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Iste possimus nihil deserunt voluptatum exercitationem
                      maxime eius, repellat animi minima ratione, ipsa obcaecati
                      commodi sit, vel sapiente voluptate iusto fugiat placeat.
                    </p>
                    <button className='card-btn'>Learn More</button>
                  </div>
                </div>
              </div>
              <div className='grid-item'>
                <div className='card'>
                  <img
                    className='card-img'
                    src='../src/assets/hero_img_jpg.jpg'
                    alt=''
                  />
                  <div className='card-content'>
                    <h3 className='card-header'>Article Name</h3>
                    <p className='card-text'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Iste possimus nihil deserunt voluptatum exercitationem
                      maxime eius, repellat animi minima ratione, ipsa obcaecati
                      commodi sit, vel sapiente voluptate iusto fugiat placeat.
                    </p>
                    <button className='card-btn'>Learn More</button>
                  </div>
                </div>
              </div>
              <div className='grid-item'>
                <div className='card'>
                  <img
                    className='card-img'
                    src='../src/assets/hero_img_jpg.jpg'
                    alt=''
                  />
                  <div className='card-content'>
                    <h3 className='card-header'>Article Name</h3>
                    <p className='card-text'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Iste possimus nihil deserunt voluptatum exercitationem
                      maxime eius, repellat animi minima ratione, ipsa obcaecati
                      commodi sit, vel sapiente voluptate iusto fugiat placeat.
                    </p>
                    <button className='card-btn'>Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
