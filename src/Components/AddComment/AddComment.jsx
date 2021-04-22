import React from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';
import store from '../../state';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles(() => ({
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

const AddComment = ({ title, status, importance, completed, userId, id, comments }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [taskWithComment, settaskWithComment] = React.useState({
    title: title,
    status: status,
    importance: importance,
    completed: completed,
    userId: userId,
    id: id,
    comments: [
      {
        id: uuidv4(),
        text: 'a',
      },
    ],
  });

  const handleChange = e => {
    setValue(e);
  };

  const sendComment = () => {
    // console.log(taskWithComment);
    store.tasks.addComment(taskWithComment);
  };

  return (
    <div className={classes.Modal}>
      <TextField
        onChange={e => handleChange(e.target.value)}
        className="Comment__textarea"
        placeholder="Placeholder"
        multiline
      />
      <Button onClick={sendComment} className={classes.ModalBtn}>
        Comment
      </Button>
    </div>
  );
};

export default AddComment;
