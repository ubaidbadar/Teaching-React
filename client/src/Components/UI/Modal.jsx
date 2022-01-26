import { useState } from "react";
import Portal from "../Portal/Portal";
import styles from './Modal.module.scss';
// import useModal from '../Hooks/UseModal';


const Modal = ({ caller, isDependant = false, ...props }) => {
    const [message, setMessage] = useState(false);
    const onOpen = () => {
        setMessage(true);
    }
    const closer = () => {
        setMessage(false);
    }

    // const x = z => z + 7;
    // const y = 8;


    return (
        <>
        {/* {x(2)} */}
            {caller && caller(onOpen)}
            <Portal>
                {message &&
                    <div className={styles.Container}>
                        <div className={styles.Blur} onClick={closer}></div>
                        <div className={`${styles.Message} ${props.className}`}>
                            {props.children}
                        </div>
                    </div>
                }

            </Portal>
        </>
    );
};

export default Modal;