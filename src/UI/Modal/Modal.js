import React, { useState } from 'react';

import styles from './Modal.module.scss';
const Modal = (props) => {
  const { open, onClickHandler } = props;
  const modalShow = open && (
    <div className={styles.Container}>
      <div className={styles.Window}>
        <div className={styles.Window_Title} onClick={onClickHandler}>
          {props.title}{' '}
        </div>
        <div className={styles.Window_Content}> {props.children}</div>
      </div>
    </div>
  );
  return <>{modalShow}</>;
};

export default Modal;
