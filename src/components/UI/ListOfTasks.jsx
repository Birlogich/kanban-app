import React, { useState } from "react";
import SubmitBtn from "./SubmitBtn";

const ListOfTasks = ({ title, onSubmit, initialTasks, getTaskID }) => {
  const sendTaskId = (e) => {
    getTaskID(e.target.value);
  };

  const [activeMenu, setActiveMenu] = useState(false);

  const onBlurHandle = (e) => {
    if (!e.target.value) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  };

  const onFocusHandle = () => {
    setActiveMenu(true);
  };

  return (
    <form
      onSubmit={onSubmit}
      onBlur={(e) => onBlurHandle(e)}
      onFocus={(e) => onFocusHandle(e)}
      className="w-full"
    >
      <select
        onClick={(e) => sendTaskId(e)}
        defaultValue={"DEFAULT"}
        className={"bg-[#FFFFFF] w-full rounded-[5px] p-[7px] mb-[17px]"}
      >
        <option value="DEFAULT" disabled>
          Выберите задачу
        </option>
        {initialTasks.map((task) => {
          if (task.title === title) {
            return (
              <option key={task.id} value={task.id} itemID={task.id}>
                {task.name}
              </option>
            );
          } else {
            return false;
          }
        })}
        ;
      </select>
      {activeMenu ? (
        <SubmitBtn>Submit</SubmitBtn>
      ) : (
        <SubmitBtn disabled={true}>Submit</SubmitBtn>
      )}
    </form>
  );
};

export default ListOfTasks;
