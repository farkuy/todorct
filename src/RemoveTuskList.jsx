import React from 'react';
import ToDo from "./ToDo";
import RemoveTusk from "./RemoveTusk";

const RemoveTuskList = ({removeTusks, backPost}) => {
    return (
        <div>
            <h1>Список незавершенных дел</h1>
            {
                removeTusks.map((user, index) =>
                    <RemoveTusk backPost={backPost} removeTusk={user} index={index} key={index}/>
                )
            }
        </div>
    );
};

export default RemoveTuskList;