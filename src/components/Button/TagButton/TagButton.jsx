/* eslint-disable react/prop-types */
const TagButton = ({ tag }) => {
  return (
    <button className="text-[8px] md:text-xs text-[#196aa0] bg-white px-2 rounded-xl py-1">
      {tag}
    </button>
  );
};

export default TagButton;
