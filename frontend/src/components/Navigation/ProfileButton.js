import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import * as sessionActions from '../../store/session';
import "./ProfileButton.css"

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const history = useHistory();
  const myBookings = () => {
    history.push(`/bookings`);
  }

  return (
    <div id="profile-logout-mybookings-container">
      <button className="profile-button" onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && (
        <div className="profile-dropdown-container">
        {/* <ul className="profile-dropdown-ul"> */}
          <div className="logout-button-li">
            <button className="logout-button" onClick={logout}>Log Out</button>
 
          </div>
          <div className="logout-button-li">
          
            <button className="my-bookings-button" onClick={myBookings}>My Bookings</button>
    
          </div>
        {/* </ul> */}
        </div>
      )}
    </div>
  );
}

export default ProfileButton;
