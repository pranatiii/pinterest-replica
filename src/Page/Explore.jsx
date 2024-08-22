import React from "react";
import NavBar from "./NavBar";
import "../Pinterest/pinterest.css";

const requireImage = (imageName) => {
  try {
    return require(`../assets/${imageName}`);
  } catch (error) {
    console.error(`Image not found: ${imageName}`);
    return null;
  }
};

const imageNames = ["lady.png", "ex-quote.png", "nails.png"];

const images = imageNames.map((name) => ({
  src: requireImage(name),
  alt: name.replace(/\.png$/, "").replace(/_/g, " "),
}));

function Explore() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <NavBar />
      <div className="explore-container">
        <h3>{formattedDate}</h3>
        <h1>Stay Inspired</h1>
        <div className="flex-container">
          {images.map((image, index) => (
            <div className="flex-item" key={index}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Explore;
