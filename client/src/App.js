import { useState } from "react";
import Modal from "./Components/UI/Modal";
import styles from './App.module.scss';

function App() {
  const [message, setMessage] = useState(false)
  // const [message, setMessage] = useState(false);
  // const [theEnd, settheEnd] = useState(false);

  // const closer = () => 
  // {theEnd && settheEnd(false)};
  // or?
  //  {(settheEnd(false) && message) && setMessage(false)};
  console.log(message);
  return (
    <>
      <Modal caller={onOpen => <button className="btn-primary" onClick={onOpen}>Next</button>} className={styles.modal}>
        To continue browsing you need to accept our TOS!
        {/* <button onClick="">I don't agree</button> */}
        <Modal caller={onOpen => <button onClick={onOpen}>I don't agree</button>} className={`${styles.modal} `}>
          Good Bye!
          <button onClick={() => setMessage(true)}>Think Again!</button>
          {console.log(message)}
        </Modal>
      </Modal>

      <Modal dependant={message} close={() => setMessage(false)}>
        Dependant
      </Modal>
    </>
  )
}

export default App;
