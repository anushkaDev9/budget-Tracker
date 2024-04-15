import React from 'react'
import { FaUserCheck } from "react-icons/fa6";
import { VscGraph } from "react-icons/vsc";
import { IoAddCircle } from "react-icons/io5";
import './NavLinks.css'
const NavLinks = () => {
  return (
    <div class='navLinks-div'>
      <ul>
        <li>
          <IoAddCircle className="icons-side" title="Add Items" />
        </li>
        <li>
          <VscGraph className="icons-side" title="Track" />
        </li>

        <li>
          <FaUserCheck className="icons-side" title="Profile" />
        </li>
      </ul>
    </div>
  );
}

export default NavLinks
