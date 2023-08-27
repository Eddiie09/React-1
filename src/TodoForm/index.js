import React from "react";
import { TodoContext } from "../TodoContex";
import "./TodoForm.css";

function TodoForm() {
  const { addTodo, setOpenModal } 
  = React.useContext(TodoContext);
  
  const [newTodoValvue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValvue);
    setOpenModal(false);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onChange = (event) => {
   setNewTodoValue(event.target.value);
  };

  return (
    <form className="CustomForm" onSubmit={onSubmit}>
      <label className="CustomLabel">Escribe Tu nueva Tarea</label>
      <textarea className="CustomTextarea" 
      placeholder="Agrega tu nueva meta"
      value={newTodoValvue}
      onChange={onChange}
      />

      <div className="CustomButtonContainer">
        <button
          type="button"
          className="CustomButton CustomButton--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>

        <button type="submit" className="CustomButton CustomButton--add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
