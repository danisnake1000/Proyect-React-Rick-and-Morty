import React from "react";

const Characters = ({ character}) => {
  return (
    <div className="flex m-5 flex-wrap w-screen justify-center gap-9">
      {character.map((item, index) => (
        <div key={index}>
            <img className="py-2 rounded-full" src={item.image}/>
            <hr />
            <h5>{item.name}</h5>
            <p>location:{item.location.name}</p>
            <p>location:{item.species}</p>
        </div>
      ))}
    </div>
  );
};

export default Characters;
