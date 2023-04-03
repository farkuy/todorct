/*import React, {useEffect, useState} from 'react';

import MyButton from "../UI/button/MyButton";
const Calendar = ({dateRedux}) => {
    let t = 0
    function createCalendar(year, month) {

        let d = new Date(year, month);

        let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

        for (let i = 0; i < getDay(d); i++) {
            table += '<td></td>';
        }

        function newDae() {
            console.log(new Date(year, month, d.getDate()))
        }

        while (d.getMonth() == month) {

            const v = new Date(year, month, )
            table += '<td>' + `${<MyButton children={`peq`}/>}` + '</td>';


            if (getDay(d) % 7 == 6) {
                table += '</tr><tr>';
            }

            d.setDate(d.getDate() + 1);
        }

        if (getDay(d) != 0) {
            for (let i = getDay(d); i < 7; i++) {
                table += '<td></td>';
            }
        }

        table += '</tr></table>';

        return table;
    }

    function getDay(date) {
        let day = date.getDay();
        if (day == 0) day = 7;
        return day - 1;
    }

    const tableDateNow = createCalendar(dateRedux.getFullYear(), dateRedux.getMonth());

    function createMarkup() {
        return {__html: tableDateNow};
    }
    function MyComponent() {
        return <table className={`calendar`} dangerouslySetInnerHTML={createMarkup()} />;
    }

    return (
        <div>
            {
                MyComponent()
            }
        </div>
    );
};

export default Calendar;*/


