import { useState } from "react";
import Modal from "./ui/Modal/Modal";

function App() {
  // const xyz = (x) => {
  //   return <div>{x}</div>
  // }

  const [isModal, setIsModal] = useState(false);
  return (
    <div style={{ height: '200vh' }}>

      {/* {xyz()} */}
      <button className="btn-primary" onClick={() => setIsModal(true)}>Open Dependant Modal</button>

      <Modal component={onOpen => <button className="btn-primary" onClick={onOpen}>Open Modal</button>}>
        This is a independant modal
        <Modal component={onOpen => <button onClick={onOpen}>Open 2nd Modal</button>}>
          this is my 2nd modal
        </Modal>
      </Modal>

      {/* {isModal && (
        <Modal isDependant={true}>
          This is dependant modal
        </Modal>
      )} */}
      <Modal isDependant={isModal} onClose={() => setIsModal(false)}>
        This is dependant modal
      </Modal>

    </div>
  )
}

export default App;
