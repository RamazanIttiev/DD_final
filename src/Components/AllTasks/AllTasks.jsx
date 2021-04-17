import { observer } from 'mobx-react';
import React from 'react';
import store from '../../state';
import Task from '../Task/Task';
import './AllTasks.scss';

const Completed = observer(() => {
  return (
    <div className="AllTasks">
      <div className="AllTasks__wrapper">
        <span className="AllTasks__title">OnHold</span>
        <div className="AllTasks__content">
          {store.tasks.onHold.map(item => {
            return <Task {...item} />;
          })}
        </div>
      </div>
      <div className="AllTasks__wrapper">
        <span className="AllTasks__title">Completed</span>
        <div className="AllTasks__content">
          {store.tasks.completed.map(item => {
            return <Task {...item} />;
          })}
        </div>
      </div>
    </div>
  );
});

export default Completed;
