import st from "./IconLink.module.css";
import github from "../../../assets/images/github.png";
import vk from "../../../assets/images/vk.png";
import youtube from "../../../assets/images/youtube.png"
import twitter from "../../../assets/images/twitter.png"
import facebook from "../../../assets/images/facebook.png"
import instagram from "../../../assets/images/instagram.png"
import website from "../../../assets/images/website.png"
import mainLink from "../../../assets/images/mainLink.png"
import {Link} from "react-router-dom";
import React from "react";
import {ContactsType} from "../../../types/types";

const Websites = {
    github: github,
    vk: vk,
    youtube: youtube,
    twitter: twitter,
    facebook: facebook,
    instagram: instagram,
    website: website,
    mainLink: mainLink
}

type Props = {
    type: string
    link: string | keyof ContactsType
}
//todo: use websites object keys instead of switch-case (COMPLETED)
const IconLink: React.FC<Props> = ({link, type}) => {
    if (link === null || link === "") {
        return null
    }
debugger
    const icon = Websites[type as keyof ContactsType];

    function onLinkClick() {
        if (!link.startsWith("https://") && !link.startsWith("www")) {
            link = "https://" + link;
        }
        //return <Redirect exact to={link}/>
        // @ts-ignore
        window.location = link as Location;
    }

    return <Link to={""} onClick={onLinkClick} title={link} className={st.linkBtn}><img src={icon}
                                                                                        alt={"iconLink"}/></Link>
}

export default IconLink;