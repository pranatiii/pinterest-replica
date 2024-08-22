import { createSlice } from "@reduxjs/toolkit";

const loadState = (key, defaultValue) => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState ? JSON.parse(serializedState) : defaultValue;
  } catch (e) {
    console.error(`Error loading ${key} from localStorage`, e);
    return defaultValue;
  }
};

const initialState = {
  searchTerm: "",
  isSearchFocused: false,
  selectedImage: null,
  comments: loadState("comments", {}),
  newComment: "",
  savedImages: loadState("savedImages", []),
  likedComments: loadState("likedComments", {}),
};

const pinterestSlice = createSlice({
  name: "pinterest",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearSearchTerm: (state) => {
      state.searchTerm = "";
    },
    setSearchFocused: (state, action) => {
      state.isSearchFocused = action.payload;
    },
    setSelectedImage: (state, action) => {
      state.selectedImage = action.payload;
    },
    clearSelectedImage: (state) => {
      state.selectedImage = null;
    },
    loadComments: (state, action) => {
      state.comments = action.payload;
    },
    addComment: (state, action) => {
      const { imageAlt, comment } = action.payload;
      state.comments[imageAlt] = [...(state.comments[imageAlt] || []), comment];
      state.newComment = "";
      localStorage.setItem("comments", JSON.stringify(state.comments));
    },
    setNewComment: (state, action) => {
      state.newComment = action.payload;
    },
    removeComment: (state, action) => {
      const { imageAlt, updatedComments } = action.payload;
      state.comments[imageAlt] = updatedComments;
      localStorage.setItem("comments", JSON.stringify(state.comments));
    },
    saveImage: (state, action) => {
      if (
        !state.savedImages.find((image) => image.src === action.payload.src)
      ) {
        state.savedImages.push(action.payload);

        localStorage.setItem("savedImages", JSON.stringify(state.savedImages));
      }
    },
    removeSavedImage: (state, action) => {
      state.savedImages = state.savedImages.filter(
        (image) => image.src !== action.payload.src
      );

      localStorage.setItem("savedImages", JSON.stringify(state.savedImages));
    },
    toggleLikeComment: (state, action) => {
      const { imageAlt, commentIndex } = action.payload;
      const key = `${imageAlt}-${commentIndex}`;
      if (state.likedComments[key]) {
        delete state.likedComments[key];
      } else {
        state.likedComments[key] = true;
      }
      localStorage.setItem("likedComments", JSON.stringify(state.likedComments));
    },
  },
});

export const {
  setSearchTerm,
  clearSearchTerm,
  setSearchFocused,
  setSelectedImage,
  clearSelectedImage,
  loadComments,
  addComment,
  setNewComment,
  removeComment,
  saveImage,
  removeSavedImage,
  toggleLikeComment,
} = pinterestSlice.actions;

export default pinterestSlice.reducer;
