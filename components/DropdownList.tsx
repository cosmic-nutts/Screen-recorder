'use client';

import { useState } from "react";
import Image from "next/image";

const DropdownList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const options = ["Most Recent", "Most Liked"];

  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="filter-trigger">
          <figure className="flex items-center gap-2">
            <Image src="/assets/icons/hamburger.svg" alt="menu" width={14} height={14} />
            <span>Most Recent</span>
          </figure>
          <Image src="/assets/icons/arrow-down.svg" alt="arrow-down" width={20} height={20} />
        </div>
      </div>

      {isOpen && (
        <ul className="dropdown">
          {options.map((option) => (
            <li key={option} className="list-item">
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownList;
