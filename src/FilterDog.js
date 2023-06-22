import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import DogDetails from "./DogDetails";

const FilterDog = ({ dogs }) => {
  const { name } = useParams();
  if (name) {
    const dog = dogs.find((d) => d.name.toLowerCase() === name.toLowerCase());

    return <DogDetails dog={dog} />;
  }
  return null;
};

export default FilterDog;
