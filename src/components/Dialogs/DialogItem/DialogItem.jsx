import st from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    let path = "/dialogs/" + props.id;
    return (
        <div className={st.dialog}>
            <NavLink className={st.link} to={path}>
                <div><img className={st.img} src={props.img} alt="userPfp" /></div>
                <div className={st.name}>{props.name}</div>
            </NavLink>
        </div>
    );
}

export default DialogItem;