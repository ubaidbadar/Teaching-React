import Portal from "../Portal";
import useModal from "../../hooks/useModal";
import styles from './ModalWrapper.module.scss';
import { useState } from "react";

const ModalWrapper = ({ children, component, dependent = false, closeHandler, className }) => {
    useModal();
    
    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => {
        closeHandler && closeHandler();
        setIsOpen(false);
    }

    return (
        <>
            {component && component(() => setIsOpen(true), onClose)}
            {(isOpen || dependent) && (
                <Portal>
                    <div className={`position-fixed start-0 top-0 w-100 h-100 p-5 overflow-auto d-flex z-index-6 ${styles.root}`} >
                        <div className={`bg-white p-3 m-auto position-relative z-index-1 ${className}`} >
                            {children}
                        </div>
                        <div className={`position-fixed top-0 bottom-0 end-0 ${styles.blur}`} onClick={onClose} />
                    </div>
                </Portal>
            )}
        </>
    )
}

export default ModalWrapper;