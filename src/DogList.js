import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const DogList = ({ dogs }) => {
  return (
    <div>
      <h1>LIST OF DOGS. CLICK FOR MORE INFO.</h1>
      <div className="row">
        {dogs.map((d) => (
          <div key={d.name}>
            <img src={d.src} alt={d.name} />
            <h3>
              <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DogList;
