import { useState } from 'react';
import './withFormField.scss';

const withFormField = WrappedComponent => ({ label, onFocus, onBlur, ...props }) => {
    const [className, setClass] = useState('');
    const onFieldFocus = e => {
        setClass('FormField-Focus')
        onFocus && onFocus(e);
    }
    const onFieldBlur = e => {
        console.log(e.target.value)
        setClass(e.target.value === '' ? '' : 'FormField-Value');
        onBlur && onBlur(e);
    }
    return (
        <div className={`FormField-Root border d-flex ${className}`}>
            <div className='position-relative z-index-1 w-100 d-flex'>
                {label && <span className='FormField-Label position-absolute'>{label}</span>}
                <WrappedComponent className='FormField btn-normal' onFocus={onFieldFocus} onBlur={onFieldBlur} {...props} />
            </div>
        </div>
    )
}

export default withFormField;