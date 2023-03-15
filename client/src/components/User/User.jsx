import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import "./User.scss"

const User = () => {
  return (
    <div className='user'>
        <div className="userDetails">
            <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="" srcset="" />
            <span>Username</span>
        </div>
        <hr/>
        <div className="logoutBtn">
            <LogoutIcon className='icon'/>
            <span>Logout</span>
        </div>
    </div>
  )
}

export default User