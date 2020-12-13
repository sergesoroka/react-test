import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/action';
import Alert from '../Alert/Alert';
import styles from './Form.module.css';

export default function Form() {
  const dispatch = useDispatch();
  const taskInitialState = { username: '', email: '', text: '' };
  const [task, setTask] = useState(taskInitialState);
  const [alert, setAlert] = useState({ alertText: '', alertType: '' });

  const handlerImputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setTask({ ...task, [name]: value });
  };

  const submitHandler = event => {
    event.preventDefault();

    const newTask = {
      id: Date.now(),
      username: task.username,
      email: task.email,
      text: task.text,
      status: 0,
    };

    setTask(taskInitialState);

    if (!task.username.trim() || !task.email.trim() || !task.text.trim()) {
      setAlert({
        alertText: "Any field shouldn't be empty",
        alertType: 'error',
      });
    } else {
      dispatch(addTask(newTask));
      setAlert({
        alertText: 'The task has been created successfully',
        alertType: 'success',
      });
    }
  };

  return (
    <>
      {alert.alertText && (
        <Alert text={alert.alertText} type={alert.alertType} />
      )}
      <form className={styles.form} onSubmit={submitHandler}>
        <input
          type='text'
          value={task.username}
          name='username'
          placeholder='Username'
          onChange={handlerImputChange}
        />
        <input
          type='email'
          value={task.email}
          name='email'
          placeholder='Email'
          onChange={handlerImputChange}
        />
        <input
          type='text'
          value={task.text}
          name='text'
          placeholder='Text'
          onChange={handlerImputChange}
        />

        <button type='submit'>Create Task</button>
      </form>
    </>
  );
}
