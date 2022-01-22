import { useState } from "react";
import ModalWrapper from "../../hoc/ModalWrapper/ModalWrapper";
import AlertModal from "../AlertModal/AlertModal";



const Modal = ({ component, dependent = false, closeHandler, type='normal', ...props }) => {

    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => {
        closeHandler && closeHandler();
        setIsOpen(false);
    }

    

    return (
        <>
            {component && component(() => setIsOpen(true), onClose)}
            {(isOpen || dependent) && (type === 'alert' ? <AlertModal {...props} onClose={onClose} /> : <ModalWrapper  {...props} onClose={onClose} />)}
        </>
    )
}

export default Modal;