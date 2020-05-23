import React from 'react';
import c from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={c.profile}>
      <div className={`${c.profileCover} ${c.bg}`}>
        <div className={c.cover}>
          <h1 className={c.coverPhrase}>Adventure is life</h1>
          <img className={c.coverImage} src='https://thesologirlstravelguide.com/wp-content/uploads/2019/06/BeachBabeStock-0100-1-1024x683.jpg' alt='Cover' />
        </div>
      </div>
      <div className={`${c.profileAvatar} ${c.bg}`}>
        <img className={c.avatar} src='https://i.pinimg.com/736x/89/66/5d/89665d7648d102d1df328a1a51dc11e1--summer-beach-summer-vibes.jpg' alt='Avatar' />
      </div>
      <div className={`${c.profiledDiscription} ${c.bg}`}>
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
      <div className={c['profile-posts']}>
        <MyPosts />
      </div>
    </div>
  )
}

export default Profile;