import React, {useEffect, useMemo, useState} from 'react';
import cl from './Styles/ToDo.css'
import MyButton from "./UI/button/MyButton";
import CalendarTEst from "./UI/calendar/CalendarTEst";
import PostForm from "./PostForm";
import MyModal from "./UI/modal/MyModal";
const ToDo = ({user, index, removePost}) => {

    const [dateDeadLine, setDateDeadLine] = useState(new Date());
    const [vision, setVision] = useState(`hidden`);
    const [timeLineColor, setTmeLineCollor] = useState(`1px solid lightskyblue`);
    const [startTime, setStartTime] = useState(dateDeadLine);
    const [collorBtnC, setCollorBtnC] = useState(`white`);
    const [collorBtnO, setCollorBtnO] = useState(`white`)

    const remove = (e) => {
        e.preventDefault();

        removePost(index)

        const upOld = JSON.parse(localStorage.getItem(`oldTusk`));
        upOld.push(user);
        localStorage.setItem(`oldTusk`, JSON.stringify(upOld));

        const deleteMaineTusk = JSON.parse(localStorage.getItem(`startTusk`));
        const arr = deleteMaineTusk.filter((tusk, index) => {
            if(tusk.userId != user.userId) {
                return true
            }
            return false
        })
        localStorage.setItem(`startTusk`, JSON.stringify(arr))
    };

    const done = (e) => {
        e.preventDefault();

        removePost(index)

        const upOld = JSON.parse(localStorage.getItem(`finishTusk`));
        upOld.push(user);
        localStorage.setItem(`finishTusk`, JSON.stringify(upOld));

        const deleteMaineTusk = JSON.parse(localStorage.getItem(`startTusk`));
        const arr = deleteMaineTusk.filter((tusk, index) => {
            if(tusk.userId != user.userId) {
                return true
            }
            return false
        })
        localStorage.setItem(`startTusk`, JSON.stringify(arr))
    }


    const tabDateButton = (d) => {
        setDateDeadLine(d);

        setVision(`hidden`)
        if (d < new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate())) {
            setTmeLineCollor(`1px solid red`);
            return;
        }
        if(d > new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate() + 3)) {
            setTmeLineCollor(`1px solid green`);
            return
        }
        if(d < new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate() + 3) && d > new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate())) {
            setTmeLineCollor(`1px solid orange`);
            return;
        }
        if(d < new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate()), startTime.getHours() + 23 && d > new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate()), startTime.getHours()) {
            setTmeLineCollor(`1px solid purple`);
            return;
        }
    }

    return (
        <div style={{border: timeLineColor}} className={'oneTusk'}>
            <div>
                <div>{index + 1}.{user.userName} решил {user.numQuest}</div>
                <div>Нужно {user.title}</div>
            </div>
            <div style={{display: "flex"}}>
                <MyButton
                    style={{background: collorBtnO}}
                    onMouseOver={() => setCollorBtnO(`green`)}
                    onMouseLeave={() => setCollorBtnO(`white`)}
                    onClick={done}
                >
                    ✓
                </MyButton>
                <MyButton
                    style={{background: collorBtnC}}
                    onMouseOver={() => setCollorBtnC(`red`)}
                    onMouseLeave={() => setCollorBtnC(`white`)}
                    onClick={remove}
                >
                    X
                </MyButton>
                <MyButton
                    onClick={e => setVision(`visible`)}
                >
                    {
                        startTime === dateDeadLine
                        ? `Дата`
                        : `${dateDeadLine.getDate()}.${dateDeadLine.getMonth() + 1}.${dateDeadLine.getFullYear()}`
                    }
                </MyButton>
                <CalendarTEst tabDateButton={tabDateButton} visible={vision}/>
            </div>

        </div>
    );
};

export default ToDo;