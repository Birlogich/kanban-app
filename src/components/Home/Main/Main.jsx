import Board from "./Board/Board";

const Main = ({ tasks, setTasks }) => {
  return (
    <div className="px-20 flex-auto w-full flex bg-[#0079BF]">
      <Board tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default Main;
