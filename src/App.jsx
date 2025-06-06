import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app-container">
      <h2 className="todo-title">To-Do List</h2>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
