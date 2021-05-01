import React from 'react';
import './AddComment.scss';
import * as Yup from 'yup';
import cn from 'classnames';
import store from '../../state';
import { v4 as uuidv4 } from 'uuid';
import { Button, makeStyles } from '@material-ui/core';
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
    padding: '20px',
  },

  ModalBtn: {
    width: '100%',
    margin: '0 auto',
    background: 'linear-gradient(90deg, rgba(136, 76, 178, 1) 0%, rgba(235, 87, 87, 1) 100%)',
    color: '#fff',
  },
}));

const AddComment = ({ title, status, importance, id, closePopover, closeModal }) => {
  const classes = useStyles();
  const users = store.users.users;

  let date = new Date();

  let commentTime = date.toLocaleTimeString();

  let usersName = '';
  let usersAvatar = '';

  users.map(({ avatar, name }) => {
    usersName = name;
    usersAvatar = avatar;

    return usersName, usersAvatar;
  });

  const initialValues = {
    task: {
      taskTitle: title,
      id: id,
    },

    comments: [
      {
        usersName: usersName,
        usersAvatar: usersAvatar,
        created_at: commentTime,
        taskId: id,
        id: uuidv4(),
      },
    ],

    messages: [
      {
        taskId: id,
        id: uuidv4(),
        text: '',
      },
    ],
  };

  // Не получилось реализовать повторное добавление комментария при отправки из созданного таска,
  // поэтому оставил так, что можно добавить пустой комментарий

  const sendComment = values => {
    values.messages.map(message => {
      return values.comments.map(commetBlock => {
        commetBlock.taskTitle = values.task.title;
        store.comments.addMessage(message);
        //   if (values.comments.filter(comment => comment.taskId !== id)) {
        //     store.comments.addComment(commetBlock);
        //     store.comments.addMessage(message);
        //   } else {
        //     return store.comments.addMessage(message);
        //   }
      });
    });

    closeModal();
    closePopover();
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
      <Formik
        initialValues={initialValues}
        onSubmit={sendComment}
        validationSchema={Yup.object().shape({
          messages: Yup.array().of(
            Yup.object().shape({
              text: Yup.string()
                .required('You forgot to write your comment')
                .min(6, 'That is it? Write at least 1 word)'),
            }),
          ),
        })}
      >
        {({ errors, touched, isValidating }) => (
          <Form className="AddComment__form">
            <FieldArray
              render={() =>
                initialValues.messages.map((text, index) => (
                  <Field
                    className={cn(
                      'AddComment__textarea AddComment__comment',
                      touched.messages && errors.messages && 'input__error',
                    )}
                    as="textarea"
                    key={index}
                    placeholder="Comment it, if you wish"
                    name={`messages[${index}].text`}
                  />
                ))
              }
            />
            {errors.messages && touched.messages && (
              <div className="validation AddComment__validation">
                {errors.messages.map(item => item.text)}
              </div>
            )}

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
