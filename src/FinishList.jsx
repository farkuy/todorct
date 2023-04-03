import React from 'react';
import FinishTusk from "./FinishTusk";

const FinishList = ({finishTusks}) => {
    return (
        <div>
            <h1>Список завершенных дел</h1>
            {
                finishTusks.map((f, index) => {
                    return <FinishTusk tusk={f} index={index} key={index}/>
                })
            }
        </div>
    );
};

export default FinishList;