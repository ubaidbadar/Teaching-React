import withModal from "../../hoc/withModal/withModal";
import styles from './Modal.module.scss';

const Modal = props => (
    <div>
        <button onClick={props.onClose} type="button" className={`btn-icon d-flex ${styles.btn}`}><i className="material-icons">close</i></button>
        <div className="overflow-auto">
            {props.children}
        </div>
    </div>
);

export default withModal(Modal, `m-auto p-3 ${styles.root}`);