import ReactDOM from 'react-dom';

const Portal = ({children, id = 'modal-wrapper'}) => {
    return ReactDOM.createPortal(children, document.getElementById(id));
};

export default Portal;