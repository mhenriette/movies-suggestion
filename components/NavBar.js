import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link href="/" className="navbar-link">
        AI
      </Link>
      <Link
        href="https://github.com/mhenriette/movies-suggestion"
        className="navbar-link"
      >
        View Code
      </Link>
    </div>
  );
};

export default NavBar;
