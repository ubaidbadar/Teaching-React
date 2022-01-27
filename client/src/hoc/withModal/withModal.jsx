import { useState } from "react";
import ModalWrapper from "../ModalWrapper/ModalWrapper";


const withModal = (WrappedComponent, classN) => ({ component, className, Component, isDependant = false, onClose, ...props }) => {

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
            {(isModal || isDependant) && (
                <ModalWrapper className={`${className} ${classN}`} onClose={onCloseHandler}>
                    <WrappedComponent {...props} onClose={onCloseHandler} />
                </ModalWrapper>
            )}
            {component && component(onOpen)}
            {Component && <Component onOpen={onOpen} />}
        </>
    )
}

export default withModal;