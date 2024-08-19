import React, { Component } from 'react';
import ProfileImage from '../../assets/ProfileImage.jpg';
import '../Profile/Profile.css'

class Profile extends Component {
  render() {
    return (
      <div className='profile-ctn'>
        <img className='profile-img' src={ProfileImage} alt='Profile Image' />
        <div className='profile-name'>Sandra Berger</div>
      </div>
      
    )
  }
}

export default Profile;