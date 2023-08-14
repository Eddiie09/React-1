import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContex';

function TodoCounter() {
  const {
    completedTodos,
        totalTodos,
  } = React.useContext(TodoContext);
  
    return (
     <h1 className='TodoCounter'>
      Has completado <span> {completedTodos} </span> de<span> {totalTodos} </span>  Metas En este Mes
     </h1>
    );
  }


  export {TodoCounter};