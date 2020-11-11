import React from 'react';
import Modal from '../UI/Modal/Modal';

import styles from './HomePage.module.scss';
import { connect } from 'react-redux';

function HomePage({ auth }) {
  const greeting = !auth.isAuth ? 'Welcome Guest' : `Welcome ${auth.role}`;
  return <div className={styles.Container}>{greeting}</div>;
}
const mapStateToProps = (state) => ({ auth: state.auth });
export default connect(mapStateToProps)(HomePage);
