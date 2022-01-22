import { useState } from "react";
import Modal from "./ui/Modal/Modal";

function App() {
  const [isModal, setIsModal] = useState(false)
  const onDelete = (id, closeHandler) => {
    closeHandler();

  }
  return (
    <div style={{ height: '200vh' }}>
      <button onClick={() => setIsModal(true)}>Open Modal</button>


      <Modal
        title='Are you sure?'
        component={openHandler => <button onClick={openHandler}>Independent Modal</button>}
        footer={closeHandler => (
          <>
            <button className="tx-danger" onClick={() => onDelete('product_id', closeHandler)}>Yes</button>
            <button className="tx-grey" onClick={closeHandler}>No</button>
          </>
        )}
        description='Are you really want to delete this item?'
      />

    </div>
  )
}

export default App;
