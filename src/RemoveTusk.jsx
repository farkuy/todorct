import React from 'react';
import MyButton from "./UI/button/MyButton";

const RemoveTusk = ({removeTusk, index, backPost}) => {

    const backToDoList = () => {
        const backOneTusk = JSON.parse(localStorage.getItem(`startTusk`));
        backOneTusk.push(removeTusk);
        localStorage.setItem(`startTusk`, JSON.stringify(backOneTusk));

        const deleteMaineTusk = JSON.parse(localStorage.getItem(`oldTusk`));
        const arr = deleteMaineTusk.filter((tusk, index) => {
            if(tusk.userId != tusk.userId) {
                return true
            }
            return false
        })
        localStorage.setItem(`oldTusk`, JSON.stringify(arr))

        backPost(index)
    }

    return (
        <div className={'oneTusk'}>
            <div>
                <div>{index + 1}.{removeTusk.userName} решил {removeTusk.numQuest}</div>
                <div>Нужно {removeTusk.title}</div>
            </div>
            <MyButton
                onClick={backToDoList}
            >
                Вернуть
            </MyButton>
        </div>
    );
};

export default RemoveTusk;