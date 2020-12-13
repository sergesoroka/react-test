import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchTasks } from '../../redux/action';
import Task from './Task';
import Pagination from '../Pagination/Pagination';
import styles from './Task.module.css';

function TasksList() {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage] = useState(3);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const renderTasks = currentTasks.map((task, index) => {
    return <Task task={task} key={index} />;
  });

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <h1>Task List</h1>
      <div className={styles.taskHeader}>
        <span>Username</span>
        <span>Email</span>
        <span>Text</span>
        <span>Status</span>
      </div>
      <div>{renderTasks}</div>
      <div className={styles.pagination}>
        {/* {tasks.length > 3 ? renderPagination : null} */}
        <Pagination
          tasksPerPage={tasksPerPage}
          totalTasks={tasks.length}
          paginate={paginate}
        />
      </div>
    </>
  );
}

export default TasksList;
