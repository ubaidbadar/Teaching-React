import { useState } from "react";
import Modal from "./Components/UI/Modal";
import styles from './App.module.scss';

function App() {
  const [message, setMessage] = useState(false);
  const [theEnd, settheEnd] = useState(false);
  const [overflow, setoverflow] = useState(false);

  // const closer = () => 
  // {theEnd && settheEnd(false)};
  // or?
  //  {(settheEnd(false) && message) && setMessage(false)};
  return (
    <>
      <button onClick={() => setMessage(true)}>Delete Item</button>
      {message && (
        <Modal className={styles.modal} closer={() => setMessage(false)}>
          To continue browsing you need to accept our TOS!
          <button onClick={() => settheEnd(true)}>I don't agree</button>
        </Modal>
      )}

      {(message && theEnd) && (
        <Modal className={styles.modal} closer={() => settheEnd(false)}>
          Good Bye!
        </Modal>
      )}
    </>
  )
}

export default App;
