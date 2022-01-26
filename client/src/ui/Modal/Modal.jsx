import { useState } from "react";
import ModalWrapper from "../../hoc/ModalWrapper/ModalWrapper";




const Modal = ({ component, isDependant = false, onClose, ...props }) => {

    const [isModal, setIsModal] = useState(false);

    const onCloseHandler = () => {
        setIsModal(false);
        onClose && onClose();
    }
    const onOpen = () => {
        setIsModal(true);
    }


    return (
        <>
            {(isModal || isDependant) && <ModalWrapper {...props} onClose={onCloseHandler} />}
            {component && component(onOpen)}
        </>
    )
}

export default Modal;