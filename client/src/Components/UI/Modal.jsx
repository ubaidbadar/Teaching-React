import Portal from "../Portal/Portal";
import styles from './Modal.module.scss';
import useModal from '../Hooks/UseModal';


const Modal = (props) => {
    return (
        <Portal>
            <div className={styles.Container}>
                <div className={styles.Blur} onClick={props.closer}></div>
                <div className={`${styles.Message} ${props.className}`}>
                    {props.children}
                </div>
            </div>
        </Portal>
    );
};

export default Modal;