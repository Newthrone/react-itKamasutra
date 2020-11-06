import { connect } from "react-redux";
import { followAC, setUsers, unfollowAC } from "../../redux/users-reducer";
import Users from "./Users";

const mapStateToProps = (state) => {
  console.log('in mapStateToProps', state);
  return {
  users: state.usersPage.users,
}}

const mapDispatchToProps = (dispatch) => {
  return{
  followUser: (userID) => dispatch(followAC(userID)),
  unfollowUser: (userID) => dispatch(unfollowAC(userID)),
  setUsers: (users) => dispatch(setUsers(users)),
}}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;
