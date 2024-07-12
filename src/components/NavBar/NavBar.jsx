import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaBell, FaPencilAlt, FaSearch } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import logo from "../../assets/images/Logo.png";
import profilePic from "../../assets/images/ProfilePic.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary text-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold">
              <img src={logo} className="h-7" alt="Logo" />
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <ul className="ml-10 flex items-center space-x-4">
                <li>
                  <button className="h-10 w-10 p-2 flex justify-center items-center rounded-full bg-[#2B2B2B]">
                    <FaSearch />
                  </button>
                </li>
                <li>
                  <button className="h-10 w-10 p-2 flex justify-center items-center rounded-full bg-[#2B2B2B]">
                    <FaPencilAlt />
                  </button>
                </li>
                <li>
                  <button className="h-10 w-10 p-2 flex justify-center items-center rounded-full bg-[#2B2B2B]">
                    <MdEmail />
                  </button>
                </li>
                <li>
                  <button className="h-10 w-10 p-2 flex justify-center items-center rounded-full bg-[#2B2B2B]">
                    <FaBell />
                  </button>
                </li>
                <li>
                  <button className="h-10 w-10 p-2 flex justify-center items-center rounded-full bg-[#2B2B2B]">
                    <BsThreeDots />
                  </button>
                </li>
              </ul>
            </div>
            <div className="flex gap-6">
              <div className="size-10">
                <Avatar>
                  <AvatarImage src={profilePic} alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-full bg-[#2B2B2B] hover:text-gray-700 hover:bg-gray-100"
                >
                  {isOpen ? (
                    <HiX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <HiMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden relative">
            <div
              ref={ref}
              className="absolute top-0 left-0 w-full bg-primary opacity-50 z-10"
            >
              <ul className="px-2 pt-2 pb-3 space-y-1 text-center sm:px-3">
                <li>
                  <a
                    href="/"
                    className="block px-3 py-2  rounded-md text-base font-medium bg-black  bg-opacity-50 hover:text-white hover:bg-gray-800"
                  >
                    Search Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block px-3 py-2 rounded-md text-base font-medium bg-black  bg-opacity-50 hover:text-white hover:bg-gray-800"
                  >
                    Add Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block px-3 py-2 rounded-md text-base font-medium bg-black bg-opacity-50 hover:text-white hover:bg-gray-800"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block px-3 py-2 rounded-md text-base font-medium bg-black bg-opacity-50 hover:text-white hover:bg-gray-800"
                  >
                    Notification
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block px-3 py-2 rounded-md text-base font-medium bg-black bg-opacity-50 hover:text-white hover:bg-gray-800"
                  >
                    Setting
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default NavBar;
