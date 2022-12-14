import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import logo from "../../context/apple-touch-icon.png";



function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const loggedInUser = useSelector(state => state.session.user);

  let sessionLinks;
  // if (sessionUser) {
  //   sessionLinks = (
      
  //     <ProfileButton className="profile-button" user={sessionUser} />
      
    
  //   );
  // } else {
  //   sessionLinks = (
  //     <>
  //       <LoginFormModal />
  //       <NavLink to="/signup">Sign Up</NavLink>
  //     </>
  //   );
  // }

  return (
    <>
    <nav className='nav-bar'>
      
    <div className='logo-container'>
      
        <NavLink className="home-button-logo" exact to="/">
          <img className='logo-img' id="logo" src={logo} />
        </NavLink>
        {isLoaded && sessionLinks}
     
    </div>
    
    <section className='become-a-host-and-profile-button'>
    <div className='become-a-host-container'>
      {/* <li className='li-element-become-a-host'> */}
      {loggedInUser ? <NavLink  className="NavLink-add-boutique" to="/boutiques/owned">Become a Host</NavLink> : null}
      {/* </li> */}
    </div>
    
      <ul>
      <li className='li-elements-profile-button-loggedIn'>
    {sessionUser ? <ProfileButton className="profile-button" user={sessionUser} /> : 
    <div>
        <LoginFormModal className="login-button" />
        <NavLink className="sign-up-navlink" to="/signup">Sign Up</NavLink>
      </div> }
    </li>
    </ul>

    </section>

    </nav >
    </>

  );
}

export default Navigation;
