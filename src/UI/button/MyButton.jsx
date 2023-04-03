import React from 'react';
import cl from './MyButton.component.css'
const MyButton = ({children, ...props}) => {
    return (
        <button
            {...props} className={'myBtn'}>
            {children}
        </button>
    );
};

export default MyButton;