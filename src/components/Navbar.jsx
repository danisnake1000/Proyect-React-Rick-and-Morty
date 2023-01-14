import React from "react";

const Navbar = ({titulo}) => {
  return (
    <div>
      <div className="flex justify-center m-9">
        <h1 className="bg-white fon text-5xl">{titulo}</h1>
      </div>
    </div>
  );
};

export default Navbar;
