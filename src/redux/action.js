import { ADD_TASK, FETCH_TASKS } from './types';

export function fetchTasks() {
  return async dispatch => {
    const response = await fetch(
      'https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Sergey'
    );
    const json = await response.json();
    const tasks = json.message.tasks;
    dispatch({ type: FETCH_TASKS, payload: tasks });
  };
}

export function addTask(newTask) {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
}
