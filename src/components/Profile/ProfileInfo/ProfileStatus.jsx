import React from 'react';
import classes from 'html-classes';
import styles from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
  }

  updateStatus = () => {
    this.props.updateUserStatusTC();
  }

  activateEditMode = () => {
    if (this.props.isOwnProfile) this.setState({editMode: true});
  }

  deactivateEditMode = () => {
    this.setState({editMode: false});
    this.updateStatus();
  }

  changeStatus = ({target: {value}}) => {
    this.props.setProfileStatus(value);
  }

  onBlur = () => {
    this.deactivateEditMode();
  }

  onKeyPress = (e) => {
    if (e.key === 'Enter') this.deactivateEditMode();
  }

  assembleProfileStatusClass = () => {
    let classes = [styles.profileStatus];
    if (this.props.isOwnProfile) classes.push(styles.profileStatusIsIntaractive);
    if (this.props.hasErrorUpdateStatus) classes.push(styles.profileStatusHasError);
    return classes
  }

  render() {
    return (
      <>
        {
          this.state.editMode
            ? <input className={styles.profileInputStatus}
                     autoFocus
                     onChange={this.changeStatus}
                     onKeyPress={this.onKeyPress}
                     onBlur={this.onBlur}
                     value={this.props.profileStatus}/>
            : <div  className={classes(this.assembleProfileStatusClass)}
                    onClick={this.activateEditMode} >{this.props.profileStatus}</div>
        }
      </>
    )
  }
}

export default ProfileStatus;
