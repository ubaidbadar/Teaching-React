import { useState } from "react";
import Modal from "./ui/Modal/Modal";

function App() {
  const [isModal, setIsModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false)
  return (
    <div className='d-flex' style={{height: '200vh'}}>
      <button className="mb-auto" onClick={() => setIsModal(true)}>Open Modal</button>
      {isModal && (
        <Modal closeHandler={() => setIsModal(false)}>
          Are you sure want to delete this product <button className="btn-icon tx-danger" onClick={() => setIsDeleteModal(true)}><i className="material-icons">delete</i></button>
        </Modal>
      )}
      {isDeleteModal && (
        <Modal closeHandler={() => setIsDeleteModal(false)}>
          Delete Modal
        </Modal>
      )}
    </div>
  )
}

export default App;
