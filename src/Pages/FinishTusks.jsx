import React, {useState} from 'react';
import ToDo from "../ToDo";
import RemoveTusk from "../RemoveTusk";
import cl from '../Styles/Finish.css'
import RemoveTuskList from "../RemoveTuskList";
import FinishList from "../FinishList";

const FinishTusks = () => {

    const [finishTusks, setFinishTusks] = useState(JSON.parse(localStorage.getItem(`finishTusk`)))

    return (
        <div className={`Finish`}>
            {
                finishTusks.length === 0
                    ? <h1>Задач нет</h1>
                    : <FinishList finishTusks={finishTusks}/>
            }
        </div>
    );
};

export default FinishTusks;