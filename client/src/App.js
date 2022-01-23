import { useState } from "react";
import Modal from "./Components/UI/Modal";

function App() {
  const [isModal, setIsModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false)
  const closer = () => setIsModal(false);
  return (
    <>
      <button onClick={() => setIsModal(true)}>Delete</button>
      {isModal && (
        <Modal closer={closer}>
          <button onClick={() => setIsDeleteModal(true)}><i className="material-icons">close</i></button>
          <h5>Sign In</h5>
          <input />
        </Modal>
      )}
      {isDeleteModal && (
        <Modal closer={() => setIsDeleteModal(false)}>
          <div>Deleting</div>
        </Modal>
      )}
    </>
  )
}

export default App;
