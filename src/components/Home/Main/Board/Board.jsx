import { LIST_TYPES, LIST_COPY } from "../../../../config";
import List from "../List/List";
import uniqid from "uniqid";

const Board = ({ tasks, setTasks }) => {
  const addNewTask = (obj) => {
    const newTask = {
      title: LIST_TYPES.BACKLOG,
      id: uniqid(),
      name: obj.title,
      description: obj.description || "No task added",
      isActive: false,
      finished: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="w-full flex bg-[#0079BF] mt-[20px] justify-between flex-wrap">
      {Object.values(LIST_TYPES).map((type) => {
        const listTasks = tasks?.filter((task) => task.title === type);
        return (
          <List
            key={type}
            type={type}
            title={LIST_COPY[type]}
            tasks={listTasks}
            initialTasks={tasks}
            addNewTask={addNewTask}
            setTasks={setTasks}
          />
        );
      })}
    </div>
  );
};

export default Board;
