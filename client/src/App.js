import { useState } from "react";
import ModalWrapper from "./hoc/ModalWrapper/ModalWrapper";

function App() {
  const [isModal, setIsModal] = useState(false)
  return (
    <div style={{ height: '200vh' }}>
      <button onClick={() => setIsModal(true)}>Open Modal</button>
      {isModal && (
        <ModalWrapper
          dependent={true}
          closeHandler={() => setIsModal(false)}
        >
          Dependent Modal
        </ModalWrapper>
      )}

      <ModalWrapper component={(openHandler) => <button onClick={openHandler}>Independent Modal</button>}>
        Independent Modal
      </ModalWrapper>

    </div>
  )
}

export default App;
