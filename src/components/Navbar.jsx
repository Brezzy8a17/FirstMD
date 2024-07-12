import React from 'react';
import {Link} from 'react-router-dom'
import { appleImg, searchImg } from '../utils'; 



const Navbar = () => {
  const navLists = 
  [{ name: "Quick Look", path: "./QuickLook" }, 
    { name: "Schedule", path: "./Schedule"},
    { name: "About Us", path: "./AboutUs"},
    { name: "Sign Up", path: "./SignUp"}]  ;

  return (
    <header className='w-full py-3 sm:py-6 px-5 flex justify-between items-center bg-blue-100'>
      <nav className='flex w-full screen-max-width cursor-pointer'>
        <img src={appleImg} alt="logo" width={14} height={18} />

        <div className='flex flex-1 items-center justify-center max-sm:hidden'>
          {navLists.map((nav) => (
            <Link key={nav.name} to={nav.path} className='px-5 cursor-pointer text-xl text-white hover:text-pink trasition-all'>
              {nav.name}
            </Link>
          ))}
        </div>
        <div className="ml-auto sm:ml-2" >
          <img src={searchImg} alt="Search" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
