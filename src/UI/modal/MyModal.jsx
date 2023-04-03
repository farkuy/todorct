import React, {useState} from 'react';
import cl from './MyModal.component.css'
import PostForm from "../../PostForm";
const MyModal = ({children, modal, hiddenModal}) => {

    const hidden = (e) => {
        e.preventDefault();

        hiddenModal(`hidden`)
    }

    const createPsot = (e) => {
        e.stopPropagation()
    }

    return (
        <div
            onClick={hidden}
            style={{visibility: modal}}
            className={`back`}>
            <div
                onClick={createPsot}

            >
                {children}
            </div>

        </div>
    );
};

export default MyModal;