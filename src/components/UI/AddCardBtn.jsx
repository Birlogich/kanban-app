import React from "react";

const AddCardBtn = ({ onClick }) => {
  return (
    <button
      className="text-[#5E6C84] hover:text-[#c5d5f0]"
      type="button"
      onClick={onClick}
    >
      + Add card here
    </button>
  );
};

export default AddCardBtn;
