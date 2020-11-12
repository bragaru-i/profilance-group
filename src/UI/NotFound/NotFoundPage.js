import React from 'react';

import styles from './NotFoundPage.module.scss';
const NotFoundPage = () => {
  return (
    <div className={styles.Container}>
      <h3>
        Resource not found. <br />
        Something gone really wrong
      </h3>
    </div>
  );
};

export default NotFoundPage;
