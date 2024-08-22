import React from "react";
import { FaBell, FaSearch } from "react-icons/fa";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { GrSave } from "react-icons/gr";
import { MdClear } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import {
  setSearchTerm,
  clearSearchTerm,
  setSearchFocused,
} from "../Store/pinterestSlice";
import "../Pinterest/pinterest.css";

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { searchTerm, isSearchFocused, savedImages } = useSelector(
    (state) => state.pinterest
  );

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleClearSearch = () => {
    dispatch(clearSearchTerm());
  };

  const handleSearchFocus = () => {
    dispatch(setSearchFocused(true));
  };

  const handleSearchBlur = () => {
    dispatch(setSearchFocused(false));
  };

  const handleNavigateToSaved = () => {
    navigate("/saved");
  };

  const handleNavigateToHome = () => {
    navigate("/");
  };

  const handleNavigateToExplore = () => {
    navigate("/explore");
  };

  return (
    <nav>
      <img
        className="logo"
        src="./pinterest.png"
        alt="Pinterest"
        onClick={handleNavigateToHome}
      />
      <ul>
        <li
          onClick={handleNavigateToHome}
          className={location.pathname === "/" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={handleNavigateToExplore}
          className={location.pathname === "/explore" ? "active" : ""}
        >
          Explore
        </li>
        <li>Create</li>
      </ul>
      <div className="search-container">
        <FaSearch
          className="search-icon"
          style={{ opacity: isSearchFocused ? 0 : 1 }}
        />
        <input
          className="search-bar"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
        />
        {searchTerm && (
          <div className="clear-icon" onClick={handleClearSearch}>
            <MdClear />
          </div>
        )}
      </div>
      <div className="icons">
        <FaBell />
        <BiSolidMessageRoundedDots />
        <div className="save-icon" onClick={handleNavigateToSaved}>
          <GrSave />
          <span className="save-count">{savedImages.length}</span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
