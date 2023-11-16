import { useState } from "react";
import React from "react";
import "../css_for_components/navbar.css";
import ModalOptions from "./modals/ModalOptions";

export default function Navbar() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <nav>
        <div className='navbar'>
          <div className='navbar-container'>
            <div className='navbar-left'>
              <div className='navbar-logo'>
                <img src='../src/assets/logo_svg.svg' alt='' />
              </div>
            </div>
            <div className='navbar-right'>
              <ul className='navbar-options'>
                <li>
                  <a href='' className='navbar-link'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='' className='navbar-link'>
                    About us
                  </a>
                </li>
                <li>
                  <a href='' className='navbar-link'>
                    Articles
                  </a>
                </li>
                 <li>
                  <a href='/AfterLogin' className='navbar-link'>
                    Test
                  </a>
                </li>
                <li>
                  <button
                    href=''
                    id='signin_btn'
                    className='navbar-link'
                    onClick={openModal}
                  >
                    Sign In
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <ModalOptions isOpen={isModalOpen} onRequestClose={closeModal} />
    </>
  );
}
