import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoLoading } from '../TodosLoading'
import { TodosError } from '../TodoError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContex';


function AppUI(){
const {
  loading,
  error,
  searchedTodos,
  completeTodo,
  deleteTodo,
} = React.useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />

          <TodoList>
          {loading && (
            <>
            <TodoLoading />
            <TodoLoading />
            <TodoLoading />
  
            </>
          )}
          {error && <TodosError/>}
          {(!loading && searchedTodos.length ===
            0) && <EmptyTodos />}
  
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
        
   
      
      <CreateTodoButton />
    </>
  );
}

export { AppUI };