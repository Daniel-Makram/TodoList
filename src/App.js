import React from "react";
// import FetchRandomUser from './randomUserApi';
import TodoList from './components/TodoList';

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Title</h1>
        <TodoList/>
      </div>
        );
  }
}

export default App;
