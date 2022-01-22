import ModalWrapper from "../../hoc/ModalWrapper/ModalWrapper";
import styles from './AlertModal.module.scss';
import './AlertModal.scss';

// const mohsin = {
//     rollNo: 247,
//     name: 'Mohsin Shehzad',
//     department: 'BS',
//     faculty: 'CS',
// }

// const {rollNo, name, ...info} = mohsin;

const AlertModal = ({ onClose, children, description, className, title, footer, ...props }) => {
    return (
        <ModalWrapper onClose={onClose} {...props} className={`${styles.root} Alert-Modal-Animation mt-auto m-md-auto p-3 d-grid gap-3 ${className}`}>
            <h3 className="m-0">{title}</h3>
            <p className="m-0">{description}</p>
            <div className={`d-md-flex d-grid gap-3 mt-md-1 mt-3 justify-content-md-end ${styles.footer}`}>
                {footer && footer(onClose)}
            </div>
        </ModalWrapper>
    )
}

export default AlertModal;