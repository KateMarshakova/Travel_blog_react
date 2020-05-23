import React from 'react';
import c from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <div className={`${c.control} ${c.bg}`}>
                <button className={c.choiseBtn}>Messages</button>
                <form>
                    <input className={c.search} type='text' value='Search...'></input>
                </form>
            </div>
            <div className={c.allDialogs}>
                <div className={c.item}>
                    <NavLink activeClassName={c.active} to='/dialogs/1'><button className={c.itemBtn}>Dima</button></NavLink>
                </div>
                <div className={c.item}>
                    <NavLink activeClassName={c.active} to='/dialogs/2'><button className={c.itemBtn}>Arina</button></NavLink>
                </div>
                <div className={c.item}>
                    <NavLink activeClassName={c.active} to='/dialogs/3'><button className={c.itemBtn}>Svetlana</button></NavLink>
                </div>
                <div className={c.item}>
                    <NavLink activeClassName={c.active} to='/dialogs/4'><button className={c.itemBtn}>Maxim</button></NavLink>
                </div>
                <div className={c.item}>
                    <NavLink activeClassName={c.active} to='/dialogs/5'><button className={c.itemBtn}>Sergey</button></NavLink>
                </div>
            </div>
            <div className={`${c.write} ${c.bg} ${c.active}`}>
                <div className={c.message}>Hi! How are you?</div>
                <div className={c.message}>Hello! Not bad:) You?</div>
                <div className={c.message}>Ok) I have interesting offer for you..</div>
                <div className={c.message}>Which offer?</div>
            </div>
        </div>
    );
}

export default Dialogs;