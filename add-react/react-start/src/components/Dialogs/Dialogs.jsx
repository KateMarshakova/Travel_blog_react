import React from 'react';
import c from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


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
    let dialogsElements = 
        dialogsData.map(d => {
            return <DialogItem name={d.name} id={d.id} />;
    })
       
    let messageElements = messageData
        .map (m => <Message message={m.message} />);

    return (
        <div className={c.dialogs}>
            <div className={`${c.control} ${c.bg}`}>
                <button className={c.choiseBtn}>Messages</button>
                <form>
                    <input className={c.search} type='text' value='Search...'></input>
                </form>
            </div>
            <div className={c.allDialogs}>
                {dialogsElements}
            </div>
            <div className={`${c.write} ${c.bg} ${c.active}`}>
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs;