import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="px-[20px] flex w-full justify-between py-8">
      <p className="text-[28px] text-white">Awesome Kanban Board</p>
      <div className="flex items-center relative">
        <div className="mr-6">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="white" />
          </svg>
        </div>
        <button type="button" className="h-8" onClick={showMenu}>
          {menu ? (
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.415 0.209991L6 4.79499L10.585 0.209991L12 1.62499L6 7.62499L0 1.62499L1.415 0.209991Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.415 7.79001L6 3.20501L10.585 7.79001L12 6.37501L6 0.375008L0 6.37501L1.415 7.79001Z"
                fill="white"
              />
            </svg>
          )}
        </button>
        {menu && (
          <div className="absolute z-2 flex flex-col w-[136px] h-[60px] bg-white top-[50px] left-[-60px] rounded-[5px] items-start px-[7px] py-[10px] justify-center">
            <button
              type="button"
              className="mb-[5px] text-[14px] hover:text-zinc-200"
            >
              Profile
            </button>
            <button type="button" className="text-[14px] hover:text-zinc-200">
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
