import React from 'react';
import './Task.scss';
import cn from 'classnames';
import { observer } from 'mobx-react';
import store from '../../state/index';
import Popover from '@material-ui/core/Popover';
import { Button, makeStyles, Modal, TextField } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  popover: {
    position: 'absolute',
  },
  Modal: {
    background: '#fff',
    width: '500px',
    minHeight: '300px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '20px',
    border: 'none',
  },

  ModalBtn: {
    width: '80%',
    margin: '0 auto',
  },
}));
const Task = observer(({ title, status, importance, completed, usersId, id }) => {
  const classes = useStyles();
  const [popover, setPopover] = React.useState(null);
  const [open, setOpen] = React.useState(false);

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
          className={classes.popover}
        >
          <div className="Task__options">
            <Button onClick={() => completedTasks(id)}>{!completed ? 'done' : 'not done'}</Button>
            <Button onClick={openModal}>comment</Button>
            <Modal open={open} onClose={closeModal}>
              <div className={classes.Modal}>
                <TextField placeholder="Placeholder" multiline />
                <Button className={classes.ModalBtn}>Comment</Button>
              </div>
            </Modal>
            <Button onClick={() => remove(id)}>delete</Button>
          </div>
        </Popover>
      </div>
    </>
  );
});

export default Task;
