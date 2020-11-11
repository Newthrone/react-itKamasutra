import React, { useEffect, useState } from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'

function MyPosts(props) {
  const [isDisabledBtn, setIsDisabledBtn] = useState(true);
  const { posts, newTextPost } = props;
  const textareaPost = React.createRef();

  useEffect(() => setIsDisabledBtn(() => !newTextPost), [newTextPost]);

  let postsElement = posts
    .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

  function onAddPost() {
    props.addNewPost();
  }

  function onPostChange() {
    const text = textareaPost.current.value;
    props.updateTextPost(text);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={textareaPost} onChange={onPostChange} value={newTextPost} style={{resize: 'none',}} cols="50" rows="10"></textarea>
        </div>
        <div>
          <button disabled={isDisabledBtn} onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        { postsElement }
      </div>
    </div>
  )
}

export default MyPosts
