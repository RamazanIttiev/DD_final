import React from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';
import store from '../../state';
import { v4 as uuidv4 } from 'uuid';
import { Field, FieldArray, Form, Formik } from 'formik';

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

  const initialValues = {
    taskTitle: title,
    taskId: id,
    id: uuidv4(),
    taskComments: [{ text: '' }],
  };

  const sendComment = values => {
    store.tasks.addComment(values);
  };

  return (
    <div className={classes.Modal}>
      <Formik initialValues={initialValues} onSubmit={sendComment}>
        {({ errors, touched, isValidating }) => (
          <Form className="AddTask__form">
            <FieldArray
              render={() =>
                initialValues.taskComments.map((text, index) => (
                  <Field
                    className="AddTask__textarea AddTask__comment"
                    as="textarea"
                    key={index}
                    placeholder="Comment it, if you wish"
                    name={`taskComments[${index}].text`}
                  />
                ))
              }
            />

            <Button type="submit">Add</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddComment;
