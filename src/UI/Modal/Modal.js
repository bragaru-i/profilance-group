import React, { useState } from 'react';

import Icon from '../../icons/Icons';

import styles from './Modal.module.scss';
const Modal = (props) => {
  const { open, closeModal } = props;
  const modalShow = open && (
    <div className={styles.Container}>
      <div className={styles.Window}>
        <div className={styles.Window_Title}>
          {props.title}
          <span className={styles.Window_Close} onClick={closeModal}>
            <Icon name="close-window" width="2rem" />
          </span>
        </div>
        <div className={styles.Window_Content}> {props.children}</div>
      </div>
    </div>
  );
  return <>{modalShow}</>;
};

export default Modal;
