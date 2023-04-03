import React, {useEffect, useState} from 'react';
import MyButton from "../button/MyButton";

const CalendarHead = ({exMonth, nextMonth, dateRedux}) => {
    const monthName=[
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        `Окатябрь`,
        'Ноябрь',
        'Декабрь',
    ];

    const [whatMonth, setWhatMonth] = useState(monthName[dateRedux.getMonth()])

    useEffect(() => {
        setWhatMonth(monthName[dateRedux.getMonth()])
    }, [dateRedux])

    return (
        <thead>
        <tr style={{display: "flex", justifyContent: `space-around`, position: `absolute`}}>
            <MyButton
                onClick={exMonth}
            >
                {`<`}
            </MyButton>
            <div>{whatMonth}</div>
            <MyButton
                onClick={nextMonth}
            >
                {`>`}
            </MyButton>

        </tr>

        <tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr>
        </thead>
    );
};

export default CalendarHead;