import React from "react";
import { Avatar } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './css/sidebarrow.css';


const Sidebaroptions = (props) => {
    return (
        <>
            <div className='sidebarRow'>
                {props.src && <Avatar src={props.src} />}
                {props.Icon && <ExpandMoreIcon />}
                <p>{props.title}</p>
            </div>

        </>
    );
}

export default Sidebaroptions;