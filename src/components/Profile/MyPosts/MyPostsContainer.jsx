import MyPosts from './MyPosts';
import { addPostActionCreater, updateNewPostTextActionCreater } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

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
