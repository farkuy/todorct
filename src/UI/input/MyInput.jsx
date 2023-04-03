import React from 'react';
import cl from './MyInput.component.css'
const Input = ({...props}) => {
    return (
        <input className={'myInpt'} {...props}/>
    );
};

export default Input;