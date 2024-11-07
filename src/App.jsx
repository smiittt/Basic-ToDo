import AddTask from "./component/AddTask";
import Appname from "./component/Appname";
import Todoitem1 from "./component/Todoitem1";
import Todoitem2 from "./component/Todoitem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <Appname />
      <AddTask />

      <div className="item-con">
        <Todoitem1></Todoitem1>
        <Todoitem2></Todoitem2>
      </div>
    </center>
  );
}

export default App;
