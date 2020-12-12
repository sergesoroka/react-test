import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/action';

export default function Form() {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    username: '',
    email: '',
    text: '',
  });

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
    dispatch(addTask(newTask));
    setTask({
      username: '',
      email: '',
      text: '',
    });
  };

  return (
    <form onSubmit={submitHandler}>
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
  );
}
