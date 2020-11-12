import React from 'react';
import Modal from '../UI/Modal/Modal';

import { connect } from 'react-redux';

import styles from './HomePage.module.scss';

function HomePage({ auth }) {
  const greeting = !auth.isAuth ? 'Welcome Guest' : `Welcome ${auth.role}`;
  return (
    <div className={styles.Container}>
      <h2>{greeting}</h2>
    </div>
  );
}
const mapStateToProps = (state) => ({ auth: state.auth });
export default connect(mapStateToProps)(HomePage);
