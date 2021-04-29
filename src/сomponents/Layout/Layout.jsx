import React from 'react';
import AllComments from '../AllComments/AllComments';
import AllTasks from '../AllTasks/AllTasks';
import './Layout.scss';

const Layout = () => {
  return (
    <div className="Layout">
      <AllTasks />
      <AllComments />
    </div>
  );
};

export default Layout;
