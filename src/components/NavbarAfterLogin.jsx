import { useState } from "react";
import React from "react";
import "../css_for_components/navbar.css";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

export default function NavbarAfterLogin() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    sessionStorage.clear();
    navigate("/");
  };
=======
import ModalOptions from "./modals/ModalOptions";

export default function NavbarAfterLogin() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

>>>>>>> 1c81496dac85688ffa0ab29f8fd25bc85b51f622
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
<<<<<<< HEAD
                  <a href='/portal' className='navbar-link'>
=======
                  <a href='/AfterLogin' className='navbar-link'>
>>>>>>> 1c81496dac85688ffa0ab29f8fd25bc85b51f622
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
<<<<<<< HEAD
                    onClick={handleSignOut}
=======
                    onClick={openModal}
>>>>>>> 1c81496dac85688ffa0ab29f8fd25bc85b51f622
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
<<<<<<< HEAD
=======
      <ModalOptions isOpen={isModalOpen} onRequestClose={closeModal} />
>>>>>>> 1c81496dac85688ffa0ab29f8fd25bc85b51f622
    </>
  );
}
