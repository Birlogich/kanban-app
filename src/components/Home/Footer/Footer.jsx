import React from "react";

const Footer = ({ tasks }) => {
  const activeTasks = tasks.filter((task) => task.isActive === true).length;
  const finishedTasks = tasks.filter((task) => task.finished === true).length;

  return (
    <div className="px-[20px] flex w-full justify-between py-[17px]">
      <div className="flex justify-between max-w-[331px]">
        <p className="text-[18px] text-white mr-[18px] ">
          Active tasks: {activeTasks}
        </p>
        <p className="text-[18px] text-white ml-[18px]">
          Finished tasks: {finishedTasks}
        </p>
      </div>
      <p className="text-[18px] text-white ml-18">
        Kanban board by: Ivan Zhigalev
      </p>
    </div>
  );
};

export default Footer;
