import React from 'react';
import c from './ProfileAvatar.module.css';

const ProfileAvatar = () => {
    return (
        <div className={c.profileAvatar}>
            <img className={c.avatar} src='https://i.pinimg.com/736x/89/66/5d/89665d7648d102d1df328a1a51dc11e1--summer-beach-summer-vibes.jpg' alt='Avatar' />
        </div>
    )
}

export default ProfileAvatar;