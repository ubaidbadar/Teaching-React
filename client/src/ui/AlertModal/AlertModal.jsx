import withModal from "../../hoc/withModal/withModal";
import styles from './AlertModal.module.scss';

const AlertModal = ({title, description, onClose, footer, Footer, ...props}) => (
    <>
        <h3 className="m-0">{title}</h3>
        <p className="tx-grey">{description}</p>
        <div className={`${styles.footer} gap-3 justify-content-end d-flex align-items-end`}>
            {Footer && <Footer onClose={onClose} />}
            {footer && footer(onClose)}
        </div>
    </>
);

export default withModal(AlertModal, `p-3 m-auto b-radius-4 ${styles.root}`);