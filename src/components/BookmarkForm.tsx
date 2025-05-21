import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBookmark } from "../redux/features/bookmark";
import type { Bookmark } from "../redux/types/BookmarkType";
import type { AppDispatch } from "../store";

const BookmarkForm: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!title.trim() || !url.trim()) return;

    const newBookmark: Bookmark = {
      id: Date.now().toString(),
      title,
      url,
    };

    dispatch(addBookmark(newBookmark as Bookmark));

    setTitle("");
    setUrl("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <input
          type="url"
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
        >
          Add Bookmark
        </button>
      </div>
    </form>
  );
};

export default BookmarkForm;
