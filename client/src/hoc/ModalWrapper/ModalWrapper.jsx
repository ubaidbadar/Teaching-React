import Portal from "../Portal";
import useModal from "../../hooks/useModal";
import styles from './ModalWrapper.module.scss';

const ModalWrapper = ({ children, className, onClose, Root = "div" }) => {
    useModal();


    return (
        <Portal>
            <div className={`position-fixed start-0 top-0 w-100 h-100 p-md-5 overflow-auto d-flex z-index-6 ${styles.root}`} >
                <Root className={`bg-white position-relative z-index-1 ${className}`} >
                    {children}
                </Root>
                <div className={`position-fixed top-0 bottom-0 end-0 ${styles.blur}`} onClick={onClose} />
            </div>
        </Portal>
    )
}

export default ModalWrapper;