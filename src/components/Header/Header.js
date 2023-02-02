import React, { useEffect, useRef } from "react";

import "./header.css";

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const bgHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("on-scroll");
      } else {
        headerRef.current.classList.remove("on-scroll");
      }
    };
    window.addEventListener("scroll", bgHeader);
    return () => {
      window.removeEventListener("scroll", bgHeader);
    };
  });

  return (
    <div ref={headerRef} className="header">
      <h1>Anywhere app.</h1>
      <ul>
        <li>Home</li>
        <li>Join</li>
      </ul>
    </div>
  );
};

export default Header;
