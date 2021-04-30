import { observer } from 'mobx-react';
import React from 'react';
import store from '../../state';
import Task from '../Task/Task';
import './AllTasks.scss';
import AddTask from '../AddTask/AddTask';
import { Button, Modal } from '@material-ui/core';

const Completed = observer(() => {
  const [open, setOpen] = React.useState(false);

  let taskNum = store.tasks.onHold.length;

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const wordEnding = (n, text_forms) => {
    n = Math.abs(n) % 100;
    var n1 = n % 10;
    if (n > 10 && n < 20) {
      return text_forms[1];
    }
    if (n1 > 1 && n1 < 5) {
      return text_forms[1];
    }
    if (n1 === 1) {
      return text_forms[0];
    }
    if (n === 0) {
      return text_forms[1];
    }
    return text_forms[0];
  };

  const emptyContent = () => {
    let emptyArr = [];
    for (let i = 0; i < 2; i++) {
      emptyArr.push(
        <div className="AllTasks__emptyContent" key={i}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>,
      );
    }
    return emptyArr;
  };

  return (
    <div className="AllTasks">
      <div className="AllTasks__heading">
        <h1>
          You’ve got <span>{wordEnding(taskNum, [`${taskNum} task`, `${taskNum} tasks`])} </span>
          today
        </h1>
        <Button onClick={openModal}>Add new</Button>
      </div>
      <Modal open={open} onClose={closeModal}>
        <AddTask closeModal={closeModal} />
      </Modal>
      <div className="AllTasks__wrapper">
        <span className="AllTasks__title">OnHold</span>
        <div className="AllTasks__content">
          {store.tasks.onHold.length !== 0
            ? store.tasks.onHold.map(item => {
                return <Task {...item} />;
              })
            : emptyContent()}
        </div>
      </div>
      <div className="AllTasks__wrapper">
        <span className="AllTasks__title">Completed</span>
        <div className="AllTasks__content">
          {store.tasks.completed.length !== 0
            ? store.tasks.completed.map(item => {
                return <Task {...item} />;
              })
            : emptyContent()}
        </div>
      </div>
    </div>
  );
});

export default Completed;
