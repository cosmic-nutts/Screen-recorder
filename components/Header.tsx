"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DropdownList from "./DropdownList";
import RecordScreen from "./RecordScreen";
import { ICONS } from "@/constants";

interface SharedHeaderProps {
  subHeader: string;
  title: string;
  userImg?: string;
}

const Header = ({ subHeader, title, userImg }: SharedHeaderProps) => {
  const [selectedOption, setSelectedOption] = useState("Newest");

  const options = ["Newest", "Oldest", "Most Viewed"];

  return (
    <header className="header">
      <section className="header-container">
        <div className="details">
          {userImg && (
            <Image
              src={userImg || "/assets/images/dummy.jpg"}
              alt="user"
              width={66}
              height={66}
              className="rounded-full"
            />
          )}
          <article>
            <p>{subHeader}</p>
            <h1>{title}</h1>
          </article>
        </div>

        <aside>
          <Link href="/upload" className="upload-link">
            <Image src={ICONS.upload} alt="upload" width={16} height={16} />
            <span>Upload a video</span>
          </Link>
          <RecordScreen />
        </aside>
      </section>

      <section className="search-filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search for videos, tags, folder...."
          />
          <Image
            src="/assets/icons/search.svg"
            alt="search"
            width={16}
            height={16}
          />
        </div>

        <DropdownList
          options={options}
          selectedOption={selectedOption}
          onOptionSelect={setSelectedOption}
          triggerElement={
            <button className="filter-button">
              {selectedOption}
              <Image
                src="/assets/icons/chevron-down.svg"
                alt="Chevron Down"
                width={16}
                height={16}
              />
            </button>
          }
        />
      </section>
    </header>
  );
};

export default Header;
