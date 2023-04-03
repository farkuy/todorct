import React, {useState} from 'react';
import Week from "./Week";

const MaineWeeks = ({dateRedux, tabDateButton}) => {
    const maineDate = new Date(dateRedux.getFullYear(), dateRedux.getMonth());
    const newDate = new Date(dateRedux.getFullYear(), dateRedux.getMonth());
    const month = newDate.getMonth();
    const weeks = [[]];

    function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
        let day = date.getDay();
        if (day == 0) day = 7; // сделать воскресенье (0) последним днем
        return day - 1;
    }

    while (newDate.getMonth() === month) {
        weeks[weeks.length - 1].push(newDate.getDate());
        if (getDay(newDate) % 7 == 6) {
            weeks.push([])
        }
        newDate.setDate(newDate.getDate() + 1)
    }

    if(weeks[0].length != 7) {
        while (weeks[0].length != 7) {
            weeks[0].unshift(``)
        }
    }
    if(weeks[weeks.length - 1].length != 7 && weeks[weeks.length - 1].length != 0){
        while (weeks[weeks.length - 1].length != 7) {
            weeks[weeks.length - 1].push(``)
        }
    } else {
        weeks.pop()
    }

    return (
        <tbody>
            {
                weeks.map((week, index) => {
                    return <Week tabDateButton={tabDateButton} date={maineDate} week={week} key={index}/>
                })
            }
        </tbody>
    );
};

export default MaineWeeks;