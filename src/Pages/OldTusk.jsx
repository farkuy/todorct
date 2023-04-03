import React, {useEffect, useState} from 'react';
import cl from '../Styles/Old.css'
import PostList from "../PostList";
import RemoveTuskList from "../RemoveTuskList";
const OldTusk = () => {

    const [removeTusks, setRemoveTusks] = useState(JSON.parse(localStorage.getItem(`oldTusk`)))

    const backPost = (num) => {
        const clone = removeTusks.filter((users, index) => {
            if(index !== num) {
                return true
            }
        })

        setRemoveTusks(clone)
        localStorage.setItem(`oldTusk`,  JSON.stringify(clone))
    }

    return (
        <div className={`Old`}>
            {
                removeTusks.length === 0
                ? <h1>Задач нет</h1>
                : <RemoveTuskList backPost={backPost} removeTusks={removeTusks}/>
            }
        </div>
    );
};

export default OldTusk;