import withModal from "../../hoc/withModal/withModal";
import styles from './AlertModal.module.scss';

const AlertModal = ({ title, description, onClose, footer, Footer, ...props }) => (
    <>
        <h3 className="m-0">{title}</h3>
        <p className="tx-grey mb-5 mb-sm-3">{description}</p>
        <div className={`
        ${styles.footer} 
            btn-blank-parent btn-hover-parent btn-normal-parent gap-3 justify-content-sm-end d-grid d-sm-flex align-items-end
        `}>
            {Footer && <Footer onClose={onClose} />}
            {footer && footer(onClose)}
        </div>
    </>
);

export default withModal(AlertModal, `p-3 mx-auto mt-auto mb-sm-auto ${styles.root}`);