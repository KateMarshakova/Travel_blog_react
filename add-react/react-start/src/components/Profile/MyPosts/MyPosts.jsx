import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let messageData = [
    {name: 'Julia P', message: "Hi, it's my first message."},
    {name: 'Kate M', message: 'Hi! Go to my blog.'},
    {name: 'Nastya U', message: 'Hello! How are you, girls?'}
  ]

  let messageElements = messageData.map(m => <Post name={m.name} message={m.message} />);

  return (
    <div className={c.post}>
      <div className={c.Name}>
        <h2>My posts</h2>
        <div className={c.New}>
          <textarea>My new post...</textarea>
          <button>Enter</button>
        </div>
      </div>
      {messageElements}
    </div>
  )
}

export default MyPosts;