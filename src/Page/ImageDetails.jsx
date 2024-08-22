import React from "react";
import { IoHeart } from "react-icons/io5";
import { PiTrashSimpleLight } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  setNewComment,
  clearSelectedImage,
  removeComment,
  toggleLikeComment,
} from "../Store/pinterestSlice";
import "./imageDetails.css";

function ImageDetails({ selectedImage, comments, newComment }) {
  const dispatch = useDispatch();
  const likedComments = useSelector((state) => state.pinterest.likedComments);

  const handleLikeComment = (index) => {
    dispatch(toggleLikeComment({ imageAlt: selectedImage.alt, commentIndex: index }));
  };

  const handleDeleteComment = (index) => {
    const updatedComments = comments[selectedImage.alt].filter(
      (comment, i) => i !== index
    );
    dispatch(removeComment({ imageAlt: selectedImage.alt, updatedComments }));
  };

  const handleClose = () => {
    dispatch(clearSelectedImage());
  };

  const handleCommentChange = (e) => {
    dispatch(setNewComment(e.target.value));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      dispatch(
        addComment({
          imageAlt: selectedImage.alt,
          comment: newComment,
        })
      );
    }
  };

  return (
    <div className="image-detail-fullscreen">
      <div className="image-detail-content">
        <div className="image-detail-left">
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="expanded-image"
          />
        </div>
        <div className="image-detail-right">
          <button className="close-button" onClick={handleClose}>
            X
          </button>
          <h2>{selectedImage.alt}</h2>
          <div className="comment-section">
            <p>Comments:</p>
            {comments[selectedImage.alt] && comments[selectedImage.alt].length > 0 ? (
              <ul>
                {comments[selectedImage.alt].map((comment, index) => (
                  <li key={index}>
                    {comment}
                    <div className="comment-icons">
                      <IoHeart
                        onClick={() => handleLikeComment(index)}
                        className={likedComments[`${selectedImage.alt}-${index}`] ? "liked" : ""}
                      />
                      <PiTrashSimpleLight
                        onClick={() => handleDeleteComment(index)}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No comments yet! Add one to start the conversation.</p>
            )}
          </div>
          <form onSubmit={handleCommentSubmit} className="comment-form">
            <p>What do you think?</p>
            <input
              className="comment-bar"
              type="text"
              placeholder="Add a comment"
              value={newComment}
              onChange={handleCommentChange}
            />
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ImageDetails;

