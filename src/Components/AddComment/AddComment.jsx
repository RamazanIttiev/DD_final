import React from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';
import store from '../../state';
import { v4 as uuidv4 } from 'uuid';
import { Field, FieldArray, Form, Formik } from 'formik';
import './AddComment.scss';

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
    padding: '20px',
  },

  ModalBtn: {
    width: '100%',
    margin: '0 auto',
    background: 'linear-gradient(90deg, rgba(136, 76, 178, 1) 0%, rgba(235, 87, 87, 1) 100%)',
    color: '#fff',
  },
}));

const AddComment = ({ title, status, importance, completed, userId, id, comments, closeModal }) => {
  const classes = useStyles();

  const initialValues = {
    task: {
      taskTitle: title,
      taskId: id,
      id: uuidv4(),
    },
    messages: [
      {
        taskId: id,
        text: '',
      },
    ],
  };

  const sendComment = values => {
    values.messages.map(message => {
      return store.comments.addMessage(message);
    });

    closeModal();
  };

  return (
    <div className={classes.Modal}>
      <div className="AddComment__heading">
        <span className="AddComment__title">{title}</span>
        <div className="AddComment__wrapper">
          <span className={status === 'pending' ? 'AddComment__status' : ''}>{status}</span>
          <span className="AddComment__importance">{importance}</span>
        </div>
      </div>
      <Formik initialValues={initialValues} onSubmit={sendComment}>
        {({ errors, touched, isValidating }) => (
          <Form className="AddComment__form">
            <FieldArray
              render={() =>
                initialValues.messages.map((text, index) => (
                  <Field
                    className="AddComment__textarea AddComment__comment"
                    as="textarea"
                    key={index}
                    placeholder="Comment it, if you wish"
                    name={`messages[${index}].text`}
                  />
                ))
              }
            />

            <Button className={classes.ModalBtn} type="submit">
              Add
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddComment;
