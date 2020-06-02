import React from 'react';
import c from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={c.item}>
            <NavLink activeClassName={c.active} to={'/dialogs/' + props.id}><button className={c.itemBtn}>{props.name}</button></NavLink>
        </div>
    )
}

export default DialogItem;