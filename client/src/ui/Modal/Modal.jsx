import Portal from "../../hoc/Portal";
import useModal from "../../hooks/useModal";
import styles from './Modal.module.scss';

const Modal = ({ children, closeHandler }) => {
    useModal()
    return (
        <Portal>
            <div className={`position-fixed start-0 top-0 w-100 h-100 p-5 overflow-auto d-flex z-index-6 ${styles.root}`} >
                <div className="bg-white p-3 m-auto position-relative z-index-1" >
                    {children}
                </div>
                <div className={`position-fixed top-0 bottom-0 end-0 ${styles.blur}`} onClick={closeHandler} />
            </div>
        </Portal>
    )
}

export default Modal;