import { useState } from "react";
import Modal from "./Components/UI/Modal";
import styles from './App.module.scss';

function App() {
  // const [message, setMessage] = useState(false);
  // const [theEnd, settheEnd] = useState(false);

  // const closer = () => 
  // {theEnd && settheEnd(false)};
  // or?
  //  {(settheEnd(false) && message) && setMessage(false)};
  return (
    <>


      <Modal caller={onOpen => <button onClick={onOpen}>Delete</button>} className={styles.modal}>
        To continue browsing you need to accept our TOS!
        {/* <button onClick="">I don't agree</button> */}
        <Modal caller={onOpen => <button onClick={onOpen}>I dont't agree</button>} className={styles.modal} className={styles.modal}>
          Good Bye!
        </Modal>
      </Modal>




    </>
  )
}

export default App;
