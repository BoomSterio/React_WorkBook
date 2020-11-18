import React from 'react';
import st from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, postChangeActionCreator} from "../../../redux/state";

function MyPosts(props) {
    let postsElements = props.posts.map(p => <Post name={p.name} message={p.message} likes={p.likes} img={p.img}/>);

    let newPostElement = React.createRef();

    function addPost() {
        props.dispatch(addPostActionCreator());
    }

    function onPostChange()
    {
        let text = newPostElement.current.value;
        props.dispatch(postChangeActionCreator(text));
    }
    return (
        <div>
            <div className={st.postingBlock}>
                <h3>My posts</h3>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} ></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={st.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
