const SubmitBtn = (props) => {
  const { children, disabled } = props;
  return (
    <button
      disabled={disabled}
      className={`text-[#FFFFFF] hover:scale-110 duration-300 rounded-[5px] py-[4px] px-[8px] bg-[#0079BF] ${
        disabled ? "disabled:opacity-20" : ""
      }`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default SubmitBtn;
