import React, { useState } from 'react';
import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { logout } from '../../../store/actions/authAction';

import Modal from '../../../UI/Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';

import styles from './Navigation.module.scss';

const Navigation = ({ logout, auth }) => {
  const [showLogin, setShowLogin] = useState(false);

  const authLink = auth.isAuth ? (
    <>
      {auth.role} <span onClick={logout}>Logout</span>{' '}
    </>
  ) : (
    <span onClick={() => setShowLogin(true)}>Login</span>
  );
  const closeLogin = () => setShowLogin(false);
  const login = showLogin && (
    <Modal title="Login Form" open={showLogin} closeModal={closeLogin}>
      <LoginForm closeLogin={closeLogin} />
    </Modal>
  );
  console.log(showLogin);
  return (
    <div className={styles.Nav}>
      <div className={styles.Nav_Logo}>A simple web-app</div>
      <nav className={styles.Nav_Items_Container}>
        <ul className={styles.Nav_Items}>
          <li className={styles.Nav_Item}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={styles.Nav_Item}>
            <NavLink to="/news">News</NavLink>
          </li>
          <li className={styles.Nav_Item}>{authLink}</li>
        </ul>
        {login}
      </nav>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({ logout: () => dispatch(logout()) });
const mapStateToProps = (state) => ({ auth: state.auth });
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
