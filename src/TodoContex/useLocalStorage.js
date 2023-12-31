import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoanding] = React.useState(true);
  const [error, setError] = React.useState(false);

  
  React.useEffect(() => {
   setTimeout(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName);
  
      let parsedItem;
  
      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
        setItem(parsedItem);
      }
       setLoanding(false);
     } catch(error){
      setLoanding(true);
       setError(true);
      }
  
   }, 2000,[ ]);
  });


  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
 
  return {
    item, 
    saveItem, 
    loading,
     error,
  };
}

export { useLocalStorage };

// localStorage.removeItem('Organizador');
// const defaultTodos = [
//   { text: "Curso React", completed: false },
//   { text: "Curso Javascript", completed: false },
//   { text: "Curso manipulacion de Arrays Js", completed: false },
//   { text: "Curso Node.js", completed: true },
//   { text: "Creacion pagina empresa", completed: false }
// ];

// localStorage.setItem('Organizador', JSON.stringify(defaultTodos));
