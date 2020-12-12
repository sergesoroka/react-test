import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTasks } from '../../redux/action';
import Task from './Task';
import styles from './Task.module.css';

function TasksList() {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const fetchedTasks = tasks.map(task => <Task task={task} key={task.id} />);

  return (
    <>
      <div className={styles.taskHeader}>
        <span>Username</span>
        <span>Email</span>
        <span>Text</span>
        <span>Status</span>
      </div>
      <div>{fetchedTasks}</div>
    </>
  );
}

export default TasksList;
