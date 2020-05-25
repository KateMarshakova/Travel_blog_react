import React from 'react';
import c from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileDiscription from './MyPosts/ProfileDiscription/ProfileDiscription';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import ProfileCover from './ProfileCover/ProfileCover';

const Profile = () => {
  return (
    <div className={c.profile}>
      <div className={c.profileCover}>
        <ProfileCover />
      </div>
      <ProfileAvatar />
      <ProfileDiscription />
      <div className={c.profilePosts}>
        <MyPosts />
      </div>
    </div>
  )
}

export default Profile;