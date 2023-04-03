import React from 'react';
import Ceil from "./Ceil";
import cl from "./Calendar.css"

const Week = ({week, date, tabDateButton}) => {
    return (
        <tr>
            {
                week.map((day, index) => {
                    return <Ceil tabDateButton={tabDateButton} date={new Date(date.getFullYear(), date.getMonth(), day)} key={index}>{day}</Ceil>
                })
            }
        </tr>
    );
};

export default Week;