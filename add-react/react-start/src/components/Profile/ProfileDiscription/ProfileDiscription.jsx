import React from 'react';
import c from './ProfileDiscription.module.css';

const ProfileDiscription = (props) => {
    return (
        <div className={c.profileDiscription}>
            <div className={c.discription}>
                <div className={c.discriptionName}>
                    Tanya Tomskaya
                </div>
                <div className={c.discriptionDate}>
                    <span className={c.label}>Birthday:</span>
                    <span className={c.personal}>5 July</span>
                </div>
                <div className={c.discriptionDate}>
                    <span className={c.label}>Location:</span>
                    <span className={c.personal}>Moscow</span>
                </div>
                <div className={c.discriptionDate}>
                    <span className={c.label}>Contact info:</span>
                    <span className={c.personal}>Instagramm</span>
                </div>
                <div className={c.discriptionDate}>
                    <span className={c.label}>Languages:</span>
                    <span className={c.personal}>Russian, English</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileDiscription;