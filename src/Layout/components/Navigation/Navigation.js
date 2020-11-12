import React, { useState } from 'react';
import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';
import Icon from '../../../icons/Icons';
import { logout } from '../../../store/actions/authAction';

import Modal from '../../../UI/Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';

import styles from './Navigation.module.scss';

const Navigation = ({ logout, auth }) => {
  const [showLogin, setShowLogin] = useState(false);

  const authLink = auth.isAuth ? (
    <>
      <li className={styles.Nav_Item__Logged}>
        <Icon name="user" width="2rem" />
        {auth.role}
      </li>
      <li className={styles.Nav_Item}>
        <span onClick={logout}>Logout</span>
      </li>
    </>
  ) : (
    <li className={styles.Nav_Item}>
      <span onClick={() => setShowLogin(true)}>Login</span>
    </li>
  );
  const closeLogin = () => setShowLogin(false);
  const loginController = !showLogin || auth.isAuth ? false : true;
  const login = showLogin && (
    <Modal title="Login Form" open={loginController} closeModal={closeLogin}>
      <LoginForm closeLogin={closeLogin} />
    </Modal>
  );
  return (
    <div className={styles.Nav}>
      <div className={styles.Nav_Logo}>
        <h4>A simple web-app</h4>
      </div>
      <nav className={styles.Nav_Items_Container}>
        <ul className={styles.Nav_Items}>
          <li className={styles.Nav_Item}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={styles.Nav_Item}>
            <NavLink to="/news">News</NavLink>
          </li>
          {authLink}
        </ul>
        {login}
      </nav>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({ logout: () => dispatch(logout()) });
const mapStateToProps = (state) => ({ auth: state.auth });
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
