import { useState } from "react";
import Portal from "../Portal/Portal";
import styles from './Modal.module.scss';
// import useModal from '../Hooks/UseModal';


const Modal = ({ caller, dependant = false, close, ...props }) => {
    const [message, setMessage] = useState(false);
    const onOpen = () => {
        setMessage(true);
        // dependant(true);
    }
    const closer = () => {
        setMessage(false);
        close && close();
    }

    return (
        <>
            {caller && caller(onOpen)}
            {(message || dependant) &&
                <Portal>
                    <div className={styles.Container}>
                        <div className={styles.Blur} onClick={closer}></div>
                        <div className={`${styles.Message} ${props.className}`}>
                            {props.children}
                        </div>
                    </div>
                </Portal>
            }
        </>
    );
};

export default Modal;