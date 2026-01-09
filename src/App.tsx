import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import useTodo from "./hooks/useTodo";

function App() {

  const {
    todos,
    add, remove, toggle
  } = useTodo();

  return (
    <div className="m-auto py-8 w-[90%] md:w-1/2 md:flex space-y-4 md:space-x-8">
      <div className="md:w-1/2">
        <AddTodoForm onAdd={add} />
      </div>
      <div className="md:w-1/2">
        <TodoList todos={todos} onToggle={toggle} onRemove={remove} />
      </div>
    </div>
  );
}

export default App;
