import TodoList from "./components/TodoList";
import useTodo from "./hooks/useTodo";

function App() {

  const {
    todos,
    add, remove, toggle
  } = useTodo();

  return (
    <div className="m-auto py-8 w-[90%] md:w-1/3">
      <TodoList todos={todos} onToggle={toggle} onRemove={remove} />
    </div>
  );
}

export default App;
