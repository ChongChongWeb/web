import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black text-white p-4 fixed w-full top-0 left-0 shadow-lg">
      <div  className="w-full flex justify-between items-center">
        <a href="#web"  className="text-xl font-bold">chongchongWEB</a>
        <div className="flex space-x-6">
          {/* 导航链接 */}
          <a href="#study-experience" className="hover:underline">Study experience</a>
          <a href="#rw" className="hover:underline">Research works</a>
          <a href="#rap" className="hover:underline">Rap</a>
          <a href="#book-display" className="hover:underline">Books</a>
          <a href="#game" className="hover:underline">Game</a>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;

