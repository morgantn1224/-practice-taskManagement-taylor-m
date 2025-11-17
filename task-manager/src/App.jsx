import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from "./components/TaskList";
import TaskDetail from "./components/TaskDetail";
import "./App.css";

function App() {
 return (
 <div className="App">
   
   <Routes>
     <Route path="/" element={<TaskList />} />
     <Route path="/task/:id" element={<TaskDetail />} />
     
   </Routes>
 </div>
 );
}
export default App;