import React, { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import './navbardropdown.css';

const NavDropdownHover = ({ title, id, className, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <NavDropdown
      title={title}
      id={id}
      className={className}
      show={isOpen}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </NavDropdown>
  );
};

export default NavDropdownHover;
