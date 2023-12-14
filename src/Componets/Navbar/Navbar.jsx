import React, { useState } from "react";
import "./style.css";
import { ArrowBigDownDash, Search, X, Menu } from "lucide-react";

import { Dropdown } from "primereact/dropdown";

const Navbar = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [show, setShow] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const languages = [
    { name: "English", code: "NY" },
    { name: "Urdu", code: "RM" },
    { name: "Arabic", code: "LDN" },
  ];
  return (
    <div className="navbar">
      <div className="logoandMenu">
        <div className="logo">
          <h4>My Trending</h4>
          <h3>Stories</h3>
        </div>
        <div className={openMenu === true ? "openmenu" : "menu"}>
          <ul>
            <li>Life And Style</li>
            <li>Business</li>
            <li>News</li>
            <li>Sport</li>
            <li>Religion</li>
            <li>Creative</li>
            <li>Opinion</li>
            <li>Tech And Scince</li>
            <li>Viral</li>
            <li>Entertainment</li>
            <li>
              More{" "}
              <h6>
                <ArrowBigDownDash />
              </h6>
              <ul className="open">
                <li>Country</li>
                <li>Place</li>
              </ul>
            </li>
            <li>
              City{" "}
              <h6>
                <ArrowBigDownDash />
              </h6>
              <ul className="open">
                <li>Lahore</li>
                <li>Karachi</li>
                <li>Multan</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="right">
        <div className="toggle-btn">
          <Menu onClick={() => setOpenMenu(!openMenu)} />
        </div>
        <div className="search">
          <div className={show === true ? "search-input" : "hide"}>
            {" "}
            <input type="text" placeholder="Search" />
            <X color="#272725" onClick={() => setShow(false)} />
          </div>

          <Search onClick={() => setShow(true)} />
        </div>
        <div className="language-filter">
          <Dropdown
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.value)}
            options={languages}
            optionLabel="name"
            placeholder="Language"
            className="w-full md:w-14rem"
          />
        </div>
        <div className="user-icon">
          <img
            src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=-mUWsTSENkugJ3qs5covpaj-bhYpxXY-v9RDpzsw504="
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
