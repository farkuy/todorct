import React from 'react';
import UserToDoList from "./UserToDoList";

const PostList = ({finalyRenderUsers, removePost}) => {

    return (
        <div>
            {
                finalyRenderUsers.length === 0
                    ? <h1>Дел нет</h1>
                    : <UserToDoList removePost={removePost} users={finalyRenderUsers}/>
            }
        </div>
    );
};

export default PostList;