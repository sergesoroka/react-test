import './App.css';
import Form from './components/Form/Form';
import TasksList from './components/Tasks/TasksList';

function App() {
  return (
    <div className='App'>
      <h1>Tasks List</h1>
      <Form />
      <TasksList />
    </div>
  );
}

export default App;
