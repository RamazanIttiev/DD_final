import React from 'react';
import Task from '../Task/Task';
import './OnHold.scss';

const OnHold = () => {
  return (
    <div className="OnHold">
      <span className="OnHold__title">On Hold</span>
      <div className="OnHold__content">
        <Task />
      </div>
    </div>
  );
};

export default OnHold;
