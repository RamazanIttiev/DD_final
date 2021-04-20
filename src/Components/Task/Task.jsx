import React from 'react';
import './Task.scss';
import cn from 'classnames';
import { observer } from 'mobx-react';
import store from '../../state/index';
import Popover from '@material-ui/core/Popover';

const Task = observer(({ title, status, importance, completed, usersId, id }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const completedTasks = id => {
    store.tasks.toggleComplete(id);
  };

  const remove = id => {
    store.tasks.remove(id);
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
        <div className="Task__menu" onClick={handleClick}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <div className="Task__options">
            <button onClick={() => completedTasks(id)}>{!completed ? 'done' : 'not done'}</button>
            <button>comment</button>
            <button onClick={() => remove(id)}>delete</button>
          </div>
        </Popover>
      </div>
    </>
  );
});

export default Task;
