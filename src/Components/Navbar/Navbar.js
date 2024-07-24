import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const scrollToTop = () => {
    window.scrollTo({top:0, behavior:'smooth'})
  }

  return (
    <nav className="bg-slate-500 p-4 sticky top-0 z-30">
      <div className=" container mx-auto flex justify-between items-center p-2">
       <div className=' justify-start'>
            <img src={logo} alt="" onClick={scrollToTop}  />
            </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:bg-gray-700 px-2 py-1 rounded"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.414 5.586a2 2 0 0 1 2.828 2.828L12.828 12l4.414 4.414a2 2 0 1 1-2.828 2.828L10 14.828l-4.414 4.414a2 2 0 1 1-2.828-2.828L7.172 12 2.758 7.586a2 2 0 1 1 2.828-2.828L10 9.172l4.414-4.414z"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          <NavLink
            to="/"
            className="text-white hover:underline px-3 py-2 rounded"
            activeclassname="bg-gray-900"
            onClick={scrollToTop}
          >
            ANA SAYFA
          </NavLink>
          <NavLink
            to="/models"
            className="text-white hover:underline px-3 py-2 rounded"
            activeclassname="bg-gray-900"
          >
            MODELLERİMİZ
          </NavLink>
          <NavLink
            to="/costume"
            className="text-white hover:underline px-3 py-2 rounded"
            activeclassname="bg-gray-900"
          >
            MOTOR KIYAFETLERİ
          </NavLink>
          <NavLink
            to="/accessory"
            className="text-white hover:underline px-3 py-2 rounded"
            activeclassname="bg-gray-900"
          >
            AKSESUAR
          </NavLink>
          <NavLink
            to="/support"
            className="text-white hover:underline px-3 py-2 rounded"
            activeclassname="bg-gray-900"
          >
            DESTEK
          </NavLink>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          <NavLink
            to="/"
            className="block text-white hover:underline px-3 py-2 rounded"
            activeclassname="bg-gray-900"
          >
            ANA SAYFA
          </NavLink>
          <NavLink
            to="/models"
            className="block text-white hover:underline px-3 py-2 rounded"
            activeclassname="bg-gray-900"
          >
            MODELLERİMİZ
          </NavLink>
          <NavLink
            to="/costume"
            className="block text-white hover:underline px-3 py-2 rounded"
            activeclassname="bg-gray-900"
          >
            MOTOR KIYAFETLERİ
          </NavLink>
          <NavLink
            to="/accessory"
            className="block text-white hover:underline px-3 py-2 rounded"
            activeclassname="bg-gray-900"
          >
            AKSESUAR
          </NavLink>
          <NavLink
            to="/support"
            className="block text-white hover:underline px-3 py-2 rounded"
            activeclassname="bg-gray-900"
          >
            DESTEK
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
