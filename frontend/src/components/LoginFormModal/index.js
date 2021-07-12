import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "./LoginForm";
import { CgLogIn } from "react-icons/cg";
import "./LoginForm.css";
function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button type="submit">
        <i className="CgLogIn" />
      </button>
      <button onClick={() => setShowModal(true)}>
        <CgLogIn className="cglogin" />
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
