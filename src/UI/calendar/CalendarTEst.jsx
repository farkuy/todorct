import React, {useState} from 'react';
import CalendarHead from "./CalendarHead";
import MaineWeeks from "./MaineWeeks";

const CalendarTEst = ({visible, tabDateButton}) => {

    const [date, setDate] = useState(new Date(new Date().getFullYear(), new Date().getMonth()));
    const [dateRedux, setDateRedux] = useState(date);

    const nextMonth = (e) => {
        e.preventDefault();
        setDateRedux(new Date(dateRedux.getFullYear(), dateRedux.getMonth() + 1));
    }

    const exMonth = (e) => {
        e.preventDefault();

        setDateRedux(new Date(dateRedux.getFullYear(), dateRedux.getMonth() - 1));
    }



    return (
        <table style={{visibility: visible}} className={`calendar`}>
            <CalendarHead dateRedux={dateRedux} exMonth={exMonth} nextMonth={nextMonth}/>
            <MaineWeeks tabDateButton={tabDateButton} dateRedux={dateRedux}/>
        </table>
    );
};

export default CalendarTEst;