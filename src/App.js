import { Routes, Route } from "react-router-dom";
import './App.css';
import Calendar from "./Components/Calender/Calendar";
import CompletedTask from "./Components/CompletedTask/CompletedTask";
import TodoApp from "./Components/TodoApp/TodoApp";
import NavBar from './Shared/NavBar';

function App() {
  return (
    <div className="App">
       <NavBar/>
       <Routes>
        <Route path="/" element={<CompletedTask/>}/>
        <Route path="/task" element={<CompletedTask/>}/>
        <Route path="/todo" element={<TodoApp/>}/>
        <Route path="/calendar" element={<Calendar/>}/>
       </Routes>
    </div>
  );
}

export default App;
