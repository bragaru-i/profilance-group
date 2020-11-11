import React from 'react';
import Navigation from './components/Navigation/Navigation';

const Layout = (props) => {
  return (
    <>
      <div className="row">
        <Navigation />
        {props.children}
        Footer goes here
      </div>
    </>
  );
};

export default Layout;
