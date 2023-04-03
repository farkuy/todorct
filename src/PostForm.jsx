import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import cl from './Styles/PostForm.css'
import CalendarTEst from "./UI/calendar/CalendarTEst";
const PostForm = ({addNewPost}) => {

    const [newTusk, setNewTusk] = useState({
        name: ``,
        body: ``,
    });
    const [tipeTusk, setTypeTusk] = useState(``);
    const [date, setDate] = useState(``)



    const addNewTusk = (e) => {
        e.preventDefault();

        const tusk = {
            userId: Date.now(),
            userName: `Алешка`,
            numQuest: newTusk.name,
            title: newTusk.body,
            completed: false,
            type: tipeTusk,
        };

        if(tusk.numQuest === `` || tusk.title === ``) {
            alert(`Заполните все колонки`);
            return
        }

        addNewPost(tusk)

        setNewTusk({
            name: ``,
            body: ``,
        })
    }

    return (
        <form className={'myForm'} action="">
            <MyInput
                value={newTusk.name}
                onChange={e => setNewTusk({...newTusk, name: e.target.value})}
            />
            <MyInput
                value={newTusk.body}
                onChange={e => setNewTusk({...newTusk, body: e.target.value})}
            />
            <select
                onChange={(e) => setTypeTusk(e.target.value)}
                name="" id="">
                <option selected disabled name="Род деятельности" id="11">Род деятельности</option>
                <option name="" id="12">Учеба</option>
                <option name="" id="13">Работа</option>
                <option name="" id="14">Спорт</option>
                <option name="" id="15">Отдых</option>
                <option name="" id="16">Семья</option>
            </select>
            <MyButton
                onClick={addNewTusk}
            >
                Добавить
            </MyButton>
        </form>
    );
};

export default PostForm;