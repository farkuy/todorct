import React from 'react';
import cl from "./Calendar.css"
const Ceil = ({children, date, tabDateButton}) => {
    return (
        <td>
            <button
                className={`CalendarButton`}
                onClick={(e) => tabDateButton(date)}
            >
                {children}
            </button>
        </td>
    );
};

export default Ceil;