import SearchBar from "../SearchBar/SearchBar.jsx";
import "./nav.css"
import { NavLink } from "react-router-dom";
export default function Nav({ onSearch }) {
  return (
    <div className="header">
      
      <NavLink to="About">
        {" "}
        <button>About</button>
      </NavLink>
      <SearchBar onSearch={onSearch} />
      <NavLink to="/Home">
        <button>Home</button>
      </NavLink>
    </div>
  );
}
