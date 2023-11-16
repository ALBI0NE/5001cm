import { useState } from "react";
import React from "react";
import "../css_for_components/navbar.css";
import ModalOptions from "./modals/ModalOptions";

export default function NavbarAfterLogin() {
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
                  <a href='/AfterLogin' className='navbar-link'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='/ArticlesAfterLogin' className='navbar-link'>
                    Articles
                  </a>
                </li>
                <li>
                  <a href='/Profile' className='navbar-link'>
                    Profile
                  </a>
                </li>
                <li>
                  <button
                    href=''
                    id='signin_btn'
                    className='navbar-link'
                    onClick={openModal}
                  >
                    Sign Out
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
