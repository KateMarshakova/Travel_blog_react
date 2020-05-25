import React from 'react';
import c from './ProfileCover.module.css';

const ProfileCover = () => {
    return (
        <div className={c.cover}>
            <h1 className={c.coverPhrase}>Adventure is life</h1>
            <img className={c.coverImage} src='https://thesologirlstravelguide.com/wp-content/uploads/2019/06/BeachBabeStock-0100-1-1024x683.jpg' alt='Cover' />
        </div>
    )
}

export default ProfileCover;