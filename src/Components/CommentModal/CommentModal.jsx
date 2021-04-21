import React from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';

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

const CommentModal = props => {
  const classes = useStyles();
  const { userId, id } = props;
  const sendComment = () => {
    console.log('com', id);
  };
  return (
    <div className={classes.Modal}>
      <TextField placeholder="Placeholder" multiline />
      <Button onClick={sendComment} className={classes.ModalBtn}>
        Comment
      </Button>
    </div>
  );
};

export default CommentModal;
