import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, makeStyles } from '@material-ui/core';
import './AddTask.scss';
import cn from 'classnames';
import store from '../../state';
import { Field, FieldArray, Form, Formik } from 'formik';

const useStyles = makeStyles(() => ({
  Modal: {
    background: '#fff',
    width: '500px',
    minHeight: '500px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '20px',
    border: 'none',
  },

  ModalBtn: {
    width: '100%',
    margin: '0 auto',
    background: 'linear-gradient(90deg, rgba(136, 76, 178, 1) 0%, rgba(235, 87, 87, 1) 100%)',
    color: '#fff',
  },
}));

const AddTask = ({ setOpen }) => {
  const classes = useStyles();
  const initialValues = {
    id: uuidv4(),
    userId: [],
    title: '',
    completed: false,
    status: 'pending',
    importance: '',
    comments: [
      {
        id: uuidv4(),
        text: '',
      },
    ],
  };

  const addNewTask = values => {
    console.log(values);
    store.tasks.addTask(values);
    setOpen(false);
  };

  return (
    <div className={cn(classes.Modal, 'AddTask')}>
      <h1 className="AddTask__title">Add your new task</h1>
      <Formik initialValues={initialValues} onSubmit={addNewTask}>
        <Form className="AddTask__form">
          <Field
            className="AddTask__textarea"
            as="textarea"
            id="Task"
            name="title"
            placeholder="Write your task"
          />
          <div className="AddTask__radioGroup">
            <label className="AddTask__radioLabel">
              <Field className="AddTask__radio" type="radio" name="importance" value="Major" />
              Major
            </label>
            <label className="AddTask__radioLabel">
              <Field className="AddTask__radio" type="radio" name="importance" value="Minor" />
              Minor
            </label>
          </div>
          <FieldArray
            name="friends"
            render={() =>
              initialValues.comments.map((comment, index) => (
                <Field
                  className="AddTask__textarea AddTask__comment"
                  as="textarea"
                  key={index}
                  placeholder="Comment it, if you wish"
                  name={`comments[${index}].text`}
                />
              ))
            }
          />

          <Button className={classes.ModalBtn} type="submit">
            Add
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddTask;
