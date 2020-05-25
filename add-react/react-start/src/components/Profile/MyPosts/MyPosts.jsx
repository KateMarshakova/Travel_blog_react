import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let messageData = [
    {name: 'Julia P', message: "Hi, it's my first message."},
    {name: 'Kate M', message: 'Hi! Go to my blog.'},
    {name: 'Nastya U', message: 'Hello! How are you, girls?'}
  ]

  return (
    <div className={c.post}>
      <div className={c.Name}>
        <h2>My posts</h2>
        <div className={c.New}>
          <textarea>My new post...</textarea>
          <button>Enter</button>
        </div>
      </div>
      <Post name={messageData[0].name} message={messageData[0].message} />
      <Post name={messageData[1].name} message={messageData[1].message} />
      <Post name={messageData[2].name} message={messageData[2].message} />
    </div>
  )
}

export default MyPosts;