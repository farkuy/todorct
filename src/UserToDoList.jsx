import React from 'react';
import ToDo from "./ToDo";
const UserToDoList = ({users, removePost}) => {


    return (
        <div>
            <h1>Список дел </h1>
            {
                users.map((user, index) =>
                    <ToDo removePost={removePost} index={index} user={user} key={index}/>
                )
            }
        </div>
    );
};

export default UserToDoList;