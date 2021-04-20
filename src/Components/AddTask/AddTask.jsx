import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core';
import './AddTask.scss';
import store from '../../state';
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
    <div className={classes.Modal}>
      <h1 className="AddTask__title">Add your new task</h1>
      <Formik initialValues={initialValues} onSubmit={addNewTask}>
        <Form>
          <Field id="Task" name="title" placeholder="Task" />

          <label>
            <Field type="radio" name="importance" value="Major" />
            Major
          </label>
          <label>
            <Field type="radio" name="importance" value="Minor" />
            Minor
          </label>
          <FieldArray
            name="friends"
            render={() => (
              <div>
                {initialValues.comments.map((comment, index) => (
                  <div key={index}>
                    <Field name={`comments[${index}].text`} />
                  </div>
                ))}
              </div>
            )}
          />

          <button className={classes.ModalBtn} type="submit">
            Add
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddTask;
