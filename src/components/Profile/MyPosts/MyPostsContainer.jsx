// import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreater, updateNewPostTextActionCreater } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
// import StoreContext from '../../../storeContext';

/* function MyPostsContainer() {

  return (
    <StoreContext.Consumer>
      { store => {
        const { posts, newTextPost } = store.getState().profilePage;
        const { dispatch } = store;

        function addNewPost() {
          dispatch(addPostActionCreater())
        }

        function updateTextPost(text) {
          dispatch(updateNewPostTextActionCreater(text))
        }

        return (
          <MyPosts addNewPost={addNewPost} updateTextPost={updateTextPost} newTextPost={newTextPost} posts={posts}/>
        )
      }}
    </StoreContext.Consumer>
  )
} */

const mapStatetoProps = ({ profilePage }) => {
  return {
    newTextPost: profilePage.newTextPost,
    posts: profilePage.posts,
  }
}

const mapDispatchtoProps = (dispatch) => ({
  addNewPost: () => dispatch(addPostActionCreater()),
  updateTextPost: (text) => dispatch(updateNewPostTextActionCreater(text)),
})

const MyPostsContainer = connect(mapStatetoProps, mapDispatchtoProps)(MyPosts);


export default MyPostsContainer
