import { useState } from "react";
import ListOfTasks from "../../../UI/ListOfTasks";
import AddCardBtn from "../../../UI/AddCardBtn";
import SubmitBtn from "../../../UI/SubmitBtn";

const FormAddItem = ({ addNewTask, type, initialTasks, setTasks }) => {
  const [isVisible, setVisible] = useState(false);

  const [taskID, setTaskID] = useState();

  const [values, setValues] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const newTodo = { ...values, [e.target.name]: e.target.value };
    setValues(newTodo);
  };

  const handleClick = () => {
    setVisible(!isVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTask(values);
    setValues({
      title: "",
      description: "",
    });
  };

  const getTaskID = (id) => {
    setTaskID(id);
  };

  const addToTheField = (e, title, newID, isActive, finished) => {
    e.preventDefault();
    setVisible(true);
    const editedTasks = initialTasks.map((task) => {
      if (task.title === title && task.id === taskID) {
        return {
          ...task,
          title: newID,
          finished: finished,
          isActive: isActive,
        };
      } else {
        return task;
      }
    });
    setTasks(editedTasks);
  };

  if (type === "backlog") {
    return (
      <form onSubmit={handleSubmit}>
        {isVisible && (
          <input
            type="text"
            name="title"
            placeholder="Add title"
            className={"bg-[#FFFFFF] w-full rounded-[5px] p-[7px] mb-[17px]"}
            onChange={handleChange}
            value={values?.title}
          />
        )}
        {values.title.length === 0 ? (
          <AddCardBtn onClick={handleClick} />
        ) : (
          <SubmitBtn>Submit</SubmitBtn>
        )}
      </form>
    );
  } else if (type === "ready") {
    return (
      <ListOfTasks
        title="backlog"
        onSubmit={(e) => addToTheField(e, "backlog", "ready", true, false)}
        initialTasks={initialTasks}
        isVisible={isVisible}
        getTaskID={getTaskID}
        taskID={taskID}
      />
    );
  } else if (type === "inProgress") {
    return (
      <ListOfTasks
        title="ready"
        onSubmit={(e) => addToTheField(e, "ready", "inProgress", true, false)}
        initialTasks={initialTasks}
        isVisible={isVisible}
        getTaskID={getTaskID}
        taskID={taskID}
      />
    );
  } else if (type === "finished") {
    return (
      <ListOfTasks
        title="inProgress"
        onSubmit={(e) =>
          addToTheField(e, "inProgress", "finished", false, true)
        }
        initialTasks={initialTasks}
        isVisible={isVisible}
        getTaskID={getTaskID}
        taskID={taskID}
      />
    );
  } else {
    return false;
  }
};

export default FormAddItem;
