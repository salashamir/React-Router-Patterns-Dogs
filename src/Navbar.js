import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = ({ dogs }) => {
  const links = dogs.map((d) => (
    <NavLink key={d.name} to={`/dogs/${d.name.toLowerCase()}`}>
      {d.name}
    </NavLink>
  ));
  return (
    <nav>
      <NavLink exact to="/dogs">
        Home
      </NavLink>
      {links}
    </nav>
  );
};

export default Navbar;
