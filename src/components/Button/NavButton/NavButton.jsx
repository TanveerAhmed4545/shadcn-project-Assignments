/* eslint-disable react/prop-types */
const NavButton = ({ icon: Icon }) => {
  return (
    <button className="h-10 w-10 p-2 flex justify-center items-center rounded-full bg-[#2B2B2B] hover:text-gray-700 hover:bg-gray-100 focus:outline-none">
      <Icon />
    </button>
  );
};

export default NavButton;
