import React from 'react';
import c from './Post.module.css';

const Post = (props) => {
  return (
    <div className={c.post}>
      <div className={c.avatar}>
        <img src="https://sun9-16.userapi.com/q3To88sRExJ5aUGTZCTDNO75_Zo4hdxJoCzoMA/b-bsKg9soIw.jpg?ava=1" alt="Avatar"/>
      </div>
      <div className={c.text}>
        <h4 className={c.name}>{props.name}</h4>
        <p className={c.message}>{props.message}</p>
      </div>
    </div>
  )
}

export default Post;