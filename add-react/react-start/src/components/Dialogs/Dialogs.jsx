import React from 'react';
import c from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={c.item}>
            <NavLink activeClassName={c.active} to={'/dialogs/' + props.id}><button className={c.itemBtn}>{props.name}</button></NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={c.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData =[
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Kate'},
        {id: 3, name: 'Svetlana'},
        {id: 4, name: 'Maxim'},
        {id: 5, name: 'Sergey'}
    ]

    let messageData = [
        {message: 'Hi! How are you?'},
        {message: 'Hello! Not bad:) You?'},
        {message: 'Ok) I have interesting offer for you..'},
        {message: 'Which offer?'}
    ]
    return (
        <div className={c.dialogs}>
            <div className={`${c.control} ${c.bg}`}>
                <button className={c.choiseBtn}>Messages</button>
                <form>
                    <input className={c.search} type='text' value='Search...'></input>
                </form>
            </div>
            <div className={c.allDialogs}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
            </div>
            <div className={`${c.write} ${c.bg} ${c.active}`}>
                <Message message={messageData[0].message} />
                <Message message={messageData[1].message} />
                <Message message={messageData[2].message} />
                <Message message={messageData[3].message} />
            </div>
        </div>
    );
}

export default Dialogs;