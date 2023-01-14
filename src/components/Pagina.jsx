import React from "react";
;

const Pagina = ({ prev, next, onPreviuss,onNexts }) => {
  const handelprevious = () => {
    onPreviuss()
  };
  const handelnext = () => {
    onNexts()
  };
  return (
    <div>
      <ul className="flex justify-center px-3 m-2 gap-2 ">
        {prev ? (
          <li>
            <button
              onClick={handelprevious}
              className="bg-blue-500 rounded-md p-2 W-20"
            >
              Previous
            </button>
          </li>
        ) : null}

        {next ? (
          <li>
            <button 
            onClick={handelnext} 
            className="bg-red-500 rounded-md p-2 w-20">
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export default Pagina;
