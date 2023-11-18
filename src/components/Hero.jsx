import React, { useState } from "react";
import "../css_for_components/hero.css";
import "../css_for_components/navbar.css";
import ModalOptions from "./modals/ModalOptions";

export default function Hero() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <main>
        <div className='container-hero'>
          <div className='hero'>
            <img src='../src/assets/hero_img_jpg.jpg' alt='' />
            <div className='hero-text'>
              <h1>Empowering Schools in Conservation Education</h1>
              <button onClick={openModal}>Sign In</button>
            </div>
          </div>
        </div>
      </main>
      <ModalOptions isOpen={isModalOpen} onRequestClose={closeModal} />
    </>
  );
}
