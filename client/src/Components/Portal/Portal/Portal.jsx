import ReactDOM from 'react-dom';

const Portal = (props) => {
    return ReactDOM.createPortal(props.children, document.getElementById('modal-wrapper'));
};

export default Portal;