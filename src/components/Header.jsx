import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      {/* Left side  */}
      <div className="flex items-center">
        <p className="text-lg font-semibold mr-2">Good Morning !</p>
        <img
          className="h-6 w-6 object-cover rounded-full"
          src="/src/assets/sun.png"
          alt="Sun Logo"
        />
      </div>

      {/* Right side  */}
      <div className="flex items-center bg-white p-3 rounded-lg">
        <div className="mr-4">
          <h3 className="text-md  font-semibold">john doe</h3>
          <p className="text-xs text-right ">John@doe.com</p>
        </div>
        <img
          className="h-8 w-8 object-cover "
          src="/src/assets/Rectangle 10.png"
        />
      </div>
    </div>
  );
};

export default Header;
