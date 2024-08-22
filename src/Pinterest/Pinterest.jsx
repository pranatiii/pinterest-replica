import React, { useEffect, useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {
  setSelectedImage,
  loadComments,
  saveImage,
} from "../Store/pinterestSlice";
import ImageDetail from "../Page/ImageDetails";
import NavBar from "../Page/NavBar";
import "./pinterest.css";

const requireImage = (imageName) => {
  try {
    return require(`../assets/${imageName}`);
  } catch (error) {
    console.error(`Image not found: ${imageName}`);
    return null;
  }
};

const imageNames = [
  "flower2.png",
  "butterfly.png",
  "butterfly2.png",
  "quote.png",
  "flower1.png",
  "tree.png",
  "bird painting.png",
  "Leaves.png",
  "painting.png",
  "doodles.png",
  "flower.png",
  "Lady painting.png",
  "quote 2.png",
  "flower3.png",
];

const images = imageNames.map((name) => ({
  src: requireImage(name),
  alt: name.replace(/\.png$/, "").replace(/_/g, " "),
}));

function Pinterest() {
  const dispatch = useDispatch();
  const { selectedImage, comments, newComment, savedImages, searchTerm } =
    useSelector((state) => state.pinterest);

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem("comments"));
    if (savedComments) {
      dispatch(loadComments(savedComments));
    }
  }, [dispatch]);

  const handleImageClick = (image) => {
    dispatch(setSelectedImage(image));
  };

  const handleSaveImage = (image, e, setButtonText) => {
    e.stopPropagation();
    if (!savedImages.find((img) => img.src === image.src)) {
      setButtonText("Saving...");
      setTimeout(() => {
        dispatch(saveImage(image));
        setButtonText("Saved");
      }, 1000);
    }
  };

  const filteredImages = images.filter((image) =>
    image.alt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <main>
        {filteredImages.length === 0 && searchTerm && (
          <p className="no-img-msg">No images match your search.</p>
        )}

        <div className="grid-container">
          {filteredImages.map((image, index) => (
            <div
              className="grid-item"
              key={index}
              onClick={() => handleImageClick(image)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="overlay">
                <MdOutlineFileUpload className="upload-icon" />
                <ButtonWithState
                  image={image}
                  onSaveImage={handleSaveImage}
                  isSaved={!!savedImages.find((img) => img.src === image.src)}
                />
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <ImageDetail
            selectedImage={selectedImage}
            comments={comments}
            newComment={newComment}
          />
        )}
      </main>
    </>
  );
}

function ButtonWithState({ image, onSaveImage, isSaved }) {
  const [buttonText, setButtonText] = useState(isSaved ? "Saved" : "Save");

  return (
    <button
      className="save-button"
      onClick={(e) => onSaveImage(image, e, setButtonText)}
      disabled={buttonText === "Saving" || buttonText === "Saved"}
    >
      {buttonText}
    </button>
  );
}

export default Pinterest;
