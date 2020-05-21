import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={c.post}>
      <div className={c.Name}>
        <h2>My posts</h2>
        <div className={c.New}>
          <textarea>My new post...</textarea>
          <button>Enter</button>
        </div>
      </div>
      <Post name='Julia P' message="Hi, it's my first message."/>
      <Post name='Kate M' message='Hi! Go to my blog.'/>
      <Post name='Nastya U' message='Hello! How are you, girls?'/>
    </div>
  )
}

export default MyPosts;