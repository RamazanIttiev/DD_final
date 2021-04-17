import React from 'react';
import './Task.scss';
import cn from 'classnames';
import { observer } from 'mobx-react';
import store from '../../state/index';

const Task = observer(({ title, status, importance, completed, usersId, id }) => {
  const completedTasks = id => {
    store.tasks.toggleComplete(id);
  };

  const remove = id => {
    store.tasks.remove(id);
    console.log(store.tasks.tasks);
  };

  return (
    <>
      <div className={cn('Task', completed === false ? '' : 'Task__onHold')} key={id}>
        <span className="Task__title">{title}</span>
        <div className="Task__status">{status}</div>
        <div className="Task__importance">{importance}</div>
        {/* <div className="Task__users">
              {usersId.map(() => {
                return <img src={author} alt="user" />;
              })}
            </div> */}
        <div className="Task__menu">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="Task__options">
          <button onClick={() => completedTasks(id)}>{!completed ? 'done' : 'not done'}</button>
          <button>comment</button>
          <button onClick={() => remove(id)}>delete</button>
        </div>
      </div>
    </>
  );
});

export default Task;
