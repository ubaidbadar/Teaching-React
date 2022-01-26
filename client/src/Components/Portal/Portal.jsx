import ReactDOM from 'react-dom';

// const mohsin = {
//     name: 'Mohsin Shehzad',
//     department: 'BS',
//     rollNo: 24,
//     faculty: 'CS'
// }
// const {name, department, ...data}
// mohsin['name']
// mohsin.name

const Portal = ({children, id = 'modal-wrapper'}) => {
    // const {children, id = 'wrapper'} = props;
    return ReactDOM.createPortal(children, document.getElementById(id));
};

export default Portal;