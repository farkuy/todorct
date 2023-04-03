import React, {useState} from 'react';
import cl from './Styles/MySelect.css'
const MySelect = ({options, defaultvalue, value, onChange}) => {

    return (
        <select
            className={`select`}
            onChange={event => onChange(event.target.value)}
            value={value}>
            <option disabled selected value="">{defaultvalue}</option>
            {options.map((option, index) =>
                    <option key={index} value={option.value}>
                        {option.name}
                    </option>
                )
            }
        </select>
    );
};

export default MySelect;