import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const PostForm = (props) => {
  const { handleSubmit, pristine, submitting } = props

  return (
    <form onSubmit={handleSubmit}
          className={s.postForm}>
      <Field name='message'
             component='textarea'
             className={s.postFormTextArea}
      />
      <button type='submit' disabled={pristine || submitting} >Add post</button>

    </form>
  )
}

const afterSubmit = (result, dispatch) =>
  dispatch(reset('post'));

const PostReduxForm = reduxForm({
  form: 'post',
  onSubmitSuccess: afterSubmit,
})(PostForm);

function MyPosts(props) {
  const { posts } = props;

  let postsElement = posts
    .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

  const onAddPost = ({message}) => {
    props.addNewPost(message);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <PostReduxForm onSubmit={onAddPost}/>
      <div className={s.posts}>
        { postsElement }
      </div>
    </div>
  )
}

export default MyPosts
