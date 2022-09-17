import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar({ title }) {

  function hambar() {
    const menu = document.querySelector('#menu');
      menu.classList.toggle('hidden');
  }

  return (
    <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
          border-b
          border-black-900
          shadow-xl
        "
      >
       <div>
          <Link to="/redditinsights">Reddit Insights</Link>
        </div>
       
         <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={hambar}
            animate-pulse="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
       
       <div className="hidden w-full md:flex md:items-center md:w-auto " id="menu">
       <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0
              "
          >
            <li>
              <Link className="md:p-4 py-2 block hover:text-purple-400" to="/redditinsights/books"
                >Best Of
              </Link>
            </li>
            <li>
              <Link className="md:p-4 py-2 block hover:text-purple-400" to="/redditinsights/analytics"
                >Analytics
              </Link>
            </li>
          </ul>
        </div>
    </nav>
  );
}


export default Navbar;
