import st from './FriendsBanner.module.css';
import {NavLink} from 'react-router-dom';

type Props = {

}

//todo: implement using server API
const FriendsBanner: React.FC<Props> = (props) => {
    let friendsCount = 192;
    return (
        <div>
            <div className={st.friendsShortcut}>
                <NavLink to="/friends">Friends ({friendsCount})</NavLink>
            </div>
            <hr/>
            <div className={st.icons}>
                <div className={st.icon}>
                    <NavLink to="/profile"><img src="https://i.redd.it/zwynel51x3e11.jpg" alt={''}/></NavLink>
                </div>
                <div className={st.icon}>
                    <NavLink to="/profile"><img
                        src="https://i.pinimg.com/originals/d7/b6/8e/d7b68ed24b41e4b9a6ceecd1f96b51e7.jpg"
                        alt={''}/></NavLink>
                </div>
                <div className={st.icon}>
                    <NavLink to="/profile"><img
                        src="https://lostandfoundtobe.com/wp-content/uploads/2020/01/cat-face-time.gif"
                        alt={''}/></NavLink>
                </div>
            </div>
        </div>
    );
}

export default FriendsBanner;