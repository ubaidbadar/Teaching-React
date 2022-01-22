import { useState } from "react";
import AlertModal from "../AlertModal/AlertModal";



const Modal = ({ component, dependent = false, closeHandler, ...props }) => {

    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => {
        closeHandler && closeHandler();
        setIsOpen(false);
    }
    return (
        <>
            {component && component(() => setIsOpen(true), onClose)}
            {(isOpen || dependent) && <AlertModal {...props} onClose={onClose} />}
        </>
    )
}

export default Modal;