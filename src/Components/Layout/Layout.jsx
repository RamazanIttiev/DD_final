import React from 'react';
import OnHold from '../OnHold/OnHold';
import './Layout.scss';

const Layout = () => {
  return (
    <div className="Layout">
      <div className="Layout__heading">
        <h1>
          You’ve got <span>7 task </span>today
        </h1>
        <button>Add new</button>
      </div>
      <OnHold />
    </div>
  );
};

export default Layout;
