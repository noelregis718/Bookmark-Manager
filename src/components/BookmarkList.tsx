import React from "react";
import { useSelector } from "react-redux";
import type { AppState } from "../store";
import BookmarkItem from "./BookmarkItem";

const BookmarkList: React.FC = () => {
  const bookmarks = useSelector((state: AppState) => state.bookmark.bookmarks);

  if (bookmarks.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-4">No bookmarks added yet</p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Bookmarks</h2>
      <ul className="space-y-4">
        {bookmarks.map((bookmark) => (
          <BookmarkItem key={bookmark.id} bookmark={bookmark} />
        ))}
      </ul>
    </div>
  );
};

export default BookmarkList;
