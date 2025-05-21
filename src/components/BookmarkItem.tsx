import React from "react";
import { useDispatch } from "react-redux";
import { removeBookmark } from "../redux/features/bookmark";
import type { Bookmark } from "../redux/types/BookmarkType";
import type { AppDispatch } from "../store";

interface Props {
  bookmark: Bookmark;
}

const BookmarkItem: React.FC<Props> = ({ bookmark }) => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md mb-4">
      <a
        href={bookmark.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline font-medium"
      >
        {bookmark.title}
      </a>
      <button
        onClick={() => dispatch(removeBookmark(bookmark.id))}
        className="ml-4 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition cursor-pointer"
      >
        Delete
      </button>
    </li>
  );
};

export default BookmarkItem;
