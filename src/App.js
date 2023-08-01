import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import React from "react";

const defaultTodos = [
  { text: "Curso React", completed: false },
  { text: "Curso Javascript", completed: false },
  { text: "Curso manipulacion de Arrays Js", completed: false },
  { text: "Curso Node.js", completed: true },
  { text: "Creacion pagina empresa", completed: false }
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();

     return todoText.includes (searchText);
    }
  );
  
    const completeTodo =(text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text == text
      );
      newTodos[todoIndex].completed = true;
      setTodos(newTodos);
    };

    const deleteTodo =(text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text == text
      );
      newTodos.splice(todoIndex, 1);
      setTodos(newTodos);
    }


  return (
    <React.Fragment>
      <TodoCounter 
      completed={completedTodos} total={totalTodos} />

      <TodoSearch 
      searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() =>completeTodo(todo.text)}
            onDelete={() =>deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
