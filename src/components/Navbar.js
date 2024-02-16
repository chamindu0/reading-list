import { useContext } from "react";
import { BookContext } from "../context/BookContext";

const NavBar = () => {
  const { books } = useContext(BookContext);

  return (
    <div className="navbar">
      <h1>My Reading Book List</h1>
      <p>You have to read only {books.length} books... </p>
    </div>
  );
};

export default NavBar;
