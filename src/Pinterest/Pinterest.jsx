import React from "react";
import { FaBell } from "react-icons/fa";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { MdOutlineFileUpload } from "react-icons/md";
import {FiChevronDown } from "react-icons/fi";
import "./pinterest.css";
import Fasearch from "../icon/Fasearch";

const Pinterest = () => {
  return (
    <>
      <nav>
        <img className="logo" src="./pinterest.png" alt="Pinterest" />
        <ul>
          <li className="active">Home</li>
          <li>Explore</li>
          <li>Create</li>
        </ul>
        <div className="search-container">
          <Fasearch className="search-icon" />
          <input className="search-bar" type="text" placeholder="Search" />
        </div>
        <div className="icons">
          <FaBell />
          <BiSolidMessageRoundedDots />
          <FiChevronDown />
        </div>
      </nav>

      <main>
        <div className="grid-container">
          <div className="grid-item">
            <img src="./picture.png" alt="Sample" />
            <div className="overlay">
              <MdOutlineFileUpload className="upload-icon" />
              <button className="save-button">Save</button>
            </div>
          </div>
          <div className="grid-item">
            <img src="./picture2.png" alt="Sample" />
            <div className="overlay">
              <MdOutlineFileUpload className="upload-icon" />
              <button className="save-button">Save</button>
            </div>
          </div>
          <div className="grid-item">
            <img src="./butterfly.png" alt="Sample" />
            <div className="overlay">
              <MdOutlineFileUpload className="upload-icon" />
              <button className="save-button">Save</button>
            </div>
          </div>
          <div className="grid-item">
            <img src="./picture2.png" alt="Sample" />
            <div className="overlay">
              <MdOutlineFileUpload className="upload-icon" />
              <button className="save-button">Save</button>
            </div>
          </div>
          <div className="grid-item">
            <img src="./tree.png" alt="Sample" />
            <div className="overlay">
              <MdOutlineFileUpload className="upload-icon" />
              <button className="save-button">Save</button>
            </div>
          </div>
          <div className="grid-item">
            <img src="./picture.png" alt="Sample" />
            <div className="overlay">
              <MdOutlineFileUpload className="upload-icon" />
              <button className="save-button">Save</button>
            </div>
          </div>
          <div className="grid-item">
            <img src="./doodles.png" alt="Sample" />
            <div className="overlay">
              <MdOutlineFileUpload className="upload-icon" />
              <button className="save-button">Save</button>
            </div>
          </div>
          <div className="grid-item">
            <img src="./picture.png" alt="Sample" />
            <div className="overlay">
              <MdOutlineFileUpload className="upload-icon" />
              <button className="save-button">Save</button>
            </div>
          </div>
          <div className="grid-item">
            <img src="./picture2.png" alt="Sample" />
            <div className="overlay">
              <MdOutlineFileUpload className="upload-icon" />
              <button className="save-button">Save</button>
            </div>
          </div>
          <div className="grid-item">
            <img src="./butterfly.png" alt="Sample" />
            <div className="overlay">
              <MdOutlineFileUpload className="upload-icon" />
              <button className="save-button">Save</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Pinterest;

