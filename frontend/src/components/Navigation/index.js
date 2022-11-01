import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';



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
      
    <ul>
      <li className='li-elements-home'>
        <NavLink className="home-button-logo" exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
    
    <section className='become-a-host-and-profile-button'>
    <ul className='ul-elements-become-a-host'>
      <li className='li-element-become-a-host'>
      {loggedInUser ? <NavLink  className="NavLink-add-boutique" to="/boutiques/owned">Become a host</NavLink> : null}
      </li>
    </ul>
    
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
