import React from 'react';
import ToDoList from './components/ToDoList';

function App( title ) {
  return (
    <div className="App">
      <header className="App-header">
      <ToDoList></ToDoList>
      </header>
    </div>
  );
}

export default App;
