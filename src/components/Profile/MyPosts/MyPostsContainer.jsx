import MyPosts from './MyPosts';
import { addPostActionCreater } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

const mapStatetoProps = ({ profilePage }) => {
  return {
    newTextPost: profilePage.newTextPost,
    posts: profilePage.posts,
  }
}

const mapDispatchtoProps = (dispatch) => ({
  addNewPost: (post) => dispatch(addPostActionCreater(post)),
})

const MyPostsContainer = connect(mapStatetoProps, mapDispatchtoProps)(MyPosts);


export default MyPostsContainer
