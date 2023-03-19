import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import SubmitBtn from "../../../UI/SubmitBtn";

const TaskDetail = ({ tasks, setTasks }) => {
  const params = useParams();
  const navigate = useNavigate();
  const task = tasks.find((task) => task.id === params.id);

  const [description, setDescription] = useState(task?.description);

  const handleChangeDescription = (e) => {
    const newDescription = e.target.value;
    setDescription(newDescription);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTasks = tasks.map((task) => {
      if (task.id === params.id) {
        return { ...task, description: description };
      } else return task;
    });
    setTasks(updatedTasks);
    navigate("../..", { relative: "path" });
  };

  return (
    <form
      className="flex flex-auto bg-white m-[20px] rounded-[5px] p-[24px] flex-col justify-between items-start"
      onSubmit={handleSubmit}
    >
      <div className="flex justify-between w-full h-full">
        <div className="flex flex-col max-w-[621px] w-full">
          <p className="text-[24px] mb-[35px] leading-7">{task?.name}</p>
          <textarea
            className="text-[18px] w-full flex-auto focus:outline-none focus:ring rounded-lg focus:border-blue-500 border-none overflow-auto resize-none block cursor-pointer hover:ring hover:border-[#243c5a]"
            name="description"
            onChange={handleChangeDescription}
            value={description}
            title="кликни чтобы добавить текст"
          ></textarea>
        </div>
        <Link to="../.." relative="path">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1.35355"
              y1="0.646447"
              x2="24.3536"
              y2="23.6464"
              stroke="black"
            />
            <line
              y1="-0.5"
              x2="32.5269"
              y2="-0.5"
              transform="matrix(-0.707107 0.707107 0.707107 0.707107 24 1)"
              stroke="black"
            />
          </svg>
        </Link>
      </div>
      <SubmitBtn>Save changes</SubmitBtn>
    </form>
  );
};

export default TaskDetail;
