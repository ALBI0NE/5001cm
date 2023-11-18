import React, { useState, useEffect } from "react";
import Modal from "react-modal";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
>>>>>>> 1c81496dac85688ffa0ab29f8fd25bc85b51f622

Modal.setAppElement("#root");

const ModalOptions = ({ isOpen, onRequestClose }) => {
<<<<<<< HEAD
  const navigate = useNavigate();

  const [isLoginFormOpen, setLoginFormOpen] = useState(false);
  const [isRegistrationFormOpen, setRegistrationFormOpen] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
=======
  const [isLoginFormOpen, setLoginFormOpen] = useState(false);
  const [isRegistrationFormOpen, setRegistrationFormOpen] = useState(false);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

>>>>>>> 1c81496dac85688ffa0ab29f8fd25bc85b51f622
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerDOB, setRegisterDOB] = useState("");
<<<<<<< HEAD
=======
  const [registerGender, setRegisterGender] = useState("");
>>>>>>> 1c81496dac85688ffa0ab29f8fd25bc85b51f622
  const [registerLastName, setRegisterLastName] = useState("");

  const openLoginForm = () => {
    setLoginFormOpen(true);
    setRegistrationFormOpen(false);
  };

  const openRegistrationForm = () => {
    setRegistrationFormOpen(true);
    setLoginFormOpen(false);
  };

  const closeLoginForm = () => {
    setLoginFormOpen(false);
  };

  const closeRegistrationForm = () => {
    setRegistrationFormOpen(false);
  };

  const handleLogin = () => {
<<<<<<< HEAD
    fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loginEmail,
        password: loginPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          sessionStorage.setItem("role", data.roleID.toString());
          closeLoginForm();
          switch (data.roleID) {
            case 4:
            case 3:
              navigate("/adminPortal");
              break;
            case 2:
              navigate("/Portal");
              break;
            default:
              console.log("Access not allowed for this role");
              break;
          }
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
      });
  };

  const handleRegister = () => {
    fetch("http://127.0.0.1:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fName: registerName,
        lName: registerLastName,
        email: registerEmail,
        password: registerPassword,
        DOB: registerDOB,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          closeRegistrationForm();
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error("Error during registration:", error);
      });
  };

=======
    // Implement your login logic here
    // You can send a request to your server or perform client-side validation
    // If the login is successful, you can close the modal and update the UI as needed
    closeLoginForm();
  };

  const handleRegister = () => {
    // Implement your registration logic here
    // You can send a request to your server or perform client-side validation
    // If the registration is successful, you can close the modal and update the UI as needed
    closeRegistrationForm();
  };

  // Use the useEffect hook to reset the form state when the modal is closed
>>>>>>> 1c81496dac85688ffa0ab29f8fd25bc85b51f622
  useEffect(() => {
    if (!isOpen) {
      setLoginFormOpen(false);
      setRegistrationFormOpen(false);
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel='Login Modal'
      className='modal-content'
      overlayClassName='modal-overlay'
    >
      <div className='modal-header'>
        {isLoginFormOpen ? (
          <h2 className='purple-text'>Login</h2>
        ) : (
          <h2 className='purple-text'>Register</h2>
        )}
      </div>
      <div className='modal-body'>
        {isLoginFormOpen ? (
          <div className='modal-login-body'>
            <input
              type='email'
              placeholder='Email'
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='Password'
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button className='purple-button' onClick={handleLogin}>
              Login
            </button>
          </div>
        ) : isRegistrationFormOpen ? (
          <div className='modal-email-body'>
            <input
              type='text'
              placeholder='First Name'
              value={registerName}
              onChange={(e) => setRegisterName(e.target.value)}
            />
            <input
              type='text'
              placeholder='Last Name'
              value={registerLastName}
              onChange={(e) => setRegisterLastName(e.target.value)}
            />
            <input
              type='date'
              placeholder='Date of Birth'
              value={registerDOB}
              onChange={(e) => setRegisterDOB(e.target.value)}
            />
            <input
              type='email'
              placeholder='Email'
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='Password'
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <input
              type='password'
              placeholder='Confrim Password'
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <label htmlFor='gender'>Gender: </label>
            <select name='gender' id='gender'>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Other'>Other</option>
            </select>
            <button className='purple-button' onClick={handleRegister}>
              Register
            </button>
          </div>
        ) : (
          <div>
            <p>Would you like to</p>
            <button className='purple-button' onClick={openLoginForm}>
              Login
            </button>
            <p>Or</p>
            <button className='purple-button' onClick={openRegistrationForm}>
              Register
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ModalOptions;
