import React from 'react';
import Navigation from './components/Navigation/Navigation';

import styles from './Layout.module.scss';

const Layout = (props) => {
  return (
    <>
      <div className="row">
        <Navigation />
        {props.children}
      </div>
      <footer className={styles.Footer}>
        <a href="mailto:bragaruion@gmail.com?subject=Collaboration">
          bragaruion@gmail.com
        </a>
        <a href="https://github.com/fargusmd" target="_blank" rel="noreferrer">
          github.com/fargusmd{' '}
        </a>
      </footer>
    </>
  );
};

export default Layout;
