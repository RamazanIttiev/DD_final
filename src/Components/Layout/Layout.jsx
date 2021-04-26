import { Button, Modal } from '@material-ui/core';
import React from 'react';
import api from '../../api';
import store from '../../state';
import AddTask from '../AddTask/AddTask';
import AllComments from '../AllComments/AllComments';
import AllTasks from '../AllTasks/AllTasks';
import './Layout.scss';

const Layout = () => {
  const [open, setOpen] = React.useState(false);

  let taskNum = 0;
  React.useEffect(() => {
    taskNum = api.tasks.getTasksDB().then(res => res);
    return taskNum;
  }, []);

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

  return (
    <div className="Layout">
      <div className="Layout__wrapper">
        <div className="Layout__heading">
          <h1>
            You’ve got <span>{wordEnding(taskNum, [`${taskNum} task`, `${taskNum} tasks`])} </span>
            today
          </h1>
          <Button onClick={openModal}>Add new</Button>
        </div>
        <Modal open={open} onClose={closeModal}>
          <AddTask closeModal={closeModal} />
        </Modal>
        <AllTasks />
      </div>
      <AllComments />
    </div>
  );
};

export default Layout;
