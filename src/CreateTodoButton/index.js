import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContex';

function CreateTodoButton(){
   const {
    openModal,
    setOpenModal
   } = React.useContext(TodoContext);
   return (
    <button
    onClick={() => {
        console.log("Hiciste click");
        if (!openModal){
            setOpenModal(true);

        }else {
            setOpenModal(false);
        }
    }}
    
    >+</button>
   )
    
    }
    export {CreateTodoButton};