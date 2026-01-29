import type { FC } from "react";
import { BookmarkForm } from "./components";
import { BookmarkList } from "./components";

const App: FC = () => {
  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-white shadow-lg rounded-lg font-sans">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Bookmark Manager 🔖
      </h1>
      <BookmarkForm />
      <BookmarkList />
      <footer className="mt-8 pt-4 border-t border-gray-100 text-center text-gray-500 text-sm italic">
        Created by Noel Regis
      </footer>
    </div>
  );
};

export default App;
