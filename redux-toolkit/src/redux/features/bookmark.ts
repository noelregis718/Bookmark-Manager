import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Bookmark, BookmarkState } from "../types/BookmarkType";

const initialState: BookmarkState = {
  bookmarks: [],
};

/*
 * The bookmarkSlice is a slice of the Redux store that manages the state of bookmarks.
 * It contains the initial state, reducers for adding and removing bookmarks, and the actions to be dispatched.
 */
const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    // Action to add a new bookmark
    addBookmark: (state, action: PayloadAction<Bookmark>) => {
      state.bookmarks.unshift(action.payload);
    },

    // Action to remove a bookmark by its ID
    removeBookmark: (state, action: PayloadAction<string>) => {
      state.bookmarks = state.bookmarks.filter(
        (bookmark) => bookmark.id !== action.payload
      );
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
