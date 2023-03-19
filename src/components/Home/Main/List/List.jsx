import FormAddItem from "../FormAddItem/FormAddItem";
import { Link } from "react-router-dom";
import { TiDelete } from "react-icons/ti";
import uniqid from "uniqid";

const List = ({ title, tasks, addNewTask, type, setTasks, initialTasks }) => {
  const deleteTask = (id) => {
    setTasks(initialTasks.filter((task) => task.id !== id));
  };

  return (
    <div
      style={{ height: "fit-content" }}
      className="p-[12px] w-full max-w-[280px] flex flex-col my-[10px] bg-[#EBECF0] rounded-[10px] first:ml-0 last:mr-0 justify-start items-start w-[282px]"
    >
      <p className="text-[18px] text-left mb-[22px]">{title}</p>
      {tasks?.map((item) => {
        return (
          <div key={uniqid()} className="flex justify-between w-full relative">
            <Link
              to={`/task/${item.id}`}
              className="bg-[#FFFFFF] w-full rounded-[5px] p-[7px] mb-[17px]"
              key={item.id}
            >
              {item.name}
            </Link>
            <TiDelete
              className="absolute top-[22%] right-[5px] cursor-pointer"
              onClick={() => deleteTask(item.id)}
            />
          </div>
        );
      })}
      <FormAddItem
        addNewTask={addNewTask}
        type={type}
        tasks={tasks}
        initialTasks={initialTasks}
        setTasks={setTasks}
      />
    </div>
  );
};

export default List;
