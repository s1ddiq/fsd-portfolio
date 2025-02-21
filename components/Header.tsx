import React from "react";

const Header = () => {
  return (
    <header className="w-full flex justify-center relative">
      {/*Seperator */}
      <div className="h-px w-full bg-blue-3 absolute bottom-12"></div>
      <div className="absolute">{/*TODO: Add header content.*/}</div>
    </header>
  );
};

export default Header;
