import React, {useMemo, useState} from 'react';
import SearchAndFilter from "../SearchAndFilter";
import MyButton from "../UI/button/MyButton";
import MyModal from "../UI/modal/MyModal";
import PostForm from "../PostForm";
import PostList from "../PostList";
import CalendarTEst from "../UI/calendar/CalendarTEst";

const PostNow = () => {

    const [users, setUsers] = useState(JSON.parse(localStorage.getItem(`startTusk`)));


    const [finalyRenderUsers, setFinalyRenderUsers] = useState(users);
    const [modal, setModal] = useState(`hidden`)


    const addNewPost = (newPost) => {
        setUsers([...users, newPost]);
        setModal(`hidden`)
    }

    const removePost = (num) => {
        const clone = users.filter((users, index) => {
            if(index !== num) {
                return true
            }
        })

        setUsers(clone)
    }

    const render = (srch) => {
        setFinalyRenderUsers(srch)
    }

    const hiddenModal = (hidden) => {
        setModal(hidden)
    }

    return (
        <div className={`App`}>
            <SearchAndFilter
                users={users}
                render={render}
            />
            <MyButton
                onClick={e => setModal(`visible`)}
            >
                Создать пост
            </MyButton>

            <MyModal
                hiddenModal={hiddenModal}
                modal={modal}
                addNewPost={addNewPost}
            >
                <PostForm addNewPost={addNewPost}/>
            </MyModal>
            <PostList finalyRenderUsers={finalyRenderUsers} removePost={removePost}/>
        </div>
    );
};

export default PostNow;