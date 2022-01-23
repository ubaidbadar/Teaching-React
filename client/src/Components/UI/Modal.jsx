import Portal from "../Portal/Portal/Portal";
import styles from './Modal.module.scss';
import useModal from '../Hooks/UseModal';


const Modal = (props) => {
    useModal();
    return (
            <Portal>
                <div className={styles.Container}>
                    <div className={styles.closer} onClick={props.closer}></div>
                    <div className={styles.Card}>
                        {props.children}
                    </div>
                </div>
            </Portal>
    );
};

export default Modal;
