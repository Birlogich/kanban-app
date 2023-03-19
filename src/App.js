import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Home/Header/Header";
import Footer from "./components/Home/Footer/Footer";
import Main from "./components/Home/Main/Main";
import TaskDetail from "./components/Home/Main/TaskDetail/TaskDetail";
import "./index.css";

function App() {
  const initialStorage = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(initialStorage);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="w-full h-screen bg-slate-500">
      <div className="w-full bg-[#0067A3] flex flex-col h-screen">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route index element={<Main tasks={tasks} setTasks={setTasks} />} />
            <Route
              path="/task/:id"
              element={<TaskDetail tasks={tasks} setTasks={setTasks} />}
            />
          </Routes>
        </BrowserRouter>
        <Footer tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
