import React from 'react';
import './Task.scss';
import cn from 'classnames';
import { observer } from 'mobx-react';
import store from '../../state/index';
import done from '../../assets/icons/done.svg';
import notDone from '../../assets/icons/notDone.svg';
import comment from '../../assets/icons/comment.svg';
import deleteTask from '../../assets/icons/delete.svg';
import Popover from '@material-ui/core/Popover';
import AddComment from '../AddComment/AddComment';
import { Button, Modal } from '@material-ui/core';

const Task = observer(props => {
  const [popover, setPopover] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const { title, status, importance, completed, usersAvatar, id } = props;

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const openPopover = event => {
    setPopover(event.currentTarget);
  };

  const closePopover = () => {
    setPopover(null);
  };

  const completedTasks = () => {
    store.tasks.toggleComplete(id);
    closePopover();
  };

  const toggleStatus = () => {
    if (status === 'Pending') {
      store.tasks.toggleStatus(id);
    }
    closePopover();
  };

  const remove = () => {
    store.tasks.removeTask(id);
    closePopover();
  };

  return (
    <>
      <div className={cn('Task', completed && 'Task__completed')} key={id}>
        <span className="Task__title">{title}</span>
        <button className="Task__status" onClick={toggleStatus}>
          {status}
        </button>
        <div className="Task__importance">{importance}</div>
        <img className="Task__user" src={usersAvatar} alt="" />

        <div className="Task__menu" onClick={openPopover}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <Popover
          id={id}
          open={popover}
          anchorEl={popover}
          onClose={closePopover}
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
            <Button onClick={completedTasks}>
              <img src={!completed ? done : notDone} alt="Done" />
            </Button>
            <Button onClick={openModal}>
              <img src={comment} alt="Comment" />
            </Button>
            <Modal open={open} onClose={closeModal}>
              <AddComment closePopover={closePopover} closeModal={closeModal} {...props} />
            </Modal>
            <Button onClick={remove}>
              <img src={deleteTask} alt="Delete" />
            </Button>
          </div>
        </Popover>
      </div>
    </>
  );
});

export default Task;
