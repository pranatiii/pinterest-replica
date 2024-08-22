import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeSavedImage } from "../Store/pinterestSlice";
import NavBar from "../Page/NavBar";
import "../Pinterest/pinterest.css";

const Saved = () => {
  const savedImages = useSelector((state) => state.pinterest.savedImages);
  const dispatch = useDispatch();

  const handleRemoveImage = (image) => {
    dispatch(removeSavedImage(image));
  };

  return (
    <>
      <NavBar />
      <div className="saved-images-container">
        <h2>Saved Images</h2>
        <div className="g-container">
          {savedImages.map((image, index) => (
            <div className="g-item" key={index}>
              <img src={image.src} alt={image.alt || "Saved Image"} />
              <button
                className="remove-button"
                onClick={() => handleRemoveImage(image)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Saved;
