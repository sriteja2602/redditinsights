import { Link, NavLink } from "react-router-dom";

function Navbar() {

  function hambar() {
    const menu = document.querySelector('#menu');
      menu.classList.toggle('hidden');
  }

  const homeLogoClick = () => {
    const menu = document.querySelector('#menu');
      menu.classList.add('hidden');
  }

  return (
    <nav
        className="
        animate__animated animate__rubberBand 
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
          <Link to="/" onClick={homeLogoClick} className="text-xl font-bold text-black tracking-wide">Reddit Insights</Link>
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
       
       <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
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
              <NavLink className="md:p-4 py-2 text-lg block hover:text-purple-400" to="/bestOf" onClick={hambar}
                >Best Of
              </NavLink>
            </li>
            <li>
              <NavLink className="md:p-4 py-2 text-lg block hover:text-purple-400" to="/analytics" onClick={hambar}
                >Analytics
              </NavLink>
            </li>
          </ul>
        </div>
    </nav>
  );
}


export default Navbar;
