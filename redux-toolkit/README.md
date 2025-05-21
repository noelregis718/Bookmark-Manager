# redux-toolkit 🔥

This is a simple **Bookmark Manager** built with **React**, **Redux Toolkit**, and **TypeScript**. It allows users to add and delete bookmarks, demonstrating clean Redux architecture **with Redux Toolkit**.

---

## Features

- Add bookmarks with title and URL
- View list of all bookmarks
- Delete individual bookmarks
- Fully typed Redux state and actions with TypeScript
- Well-structured folder layout and clean separation of concerns

---

## 🧠 Key Concepts Demonstrated

| Feature            | Description                                             |
| ------------------ | ------------------------------------------------------- |
| `Redux Toolkit`    | Using Redux Toolkit with Slice pattern                  |
| `TypeScript`       | Strong types for state, actions, and props              |
| `React Hooks`      | `useSelector`, `useDispatch`, `useState`                |
| `Component Design` | Clear separation of presentational and logic components |
| `Folder Structure` | Scalable organization for Redux and UI                  |

---

## 📦 Technologies Used

- React (v18+)
- Redux Toolkit
- TypeScript
- redux-toolkit

---

## 🗂️ File Structure

```
src/
│
├── components/
│ ├── BookmarkForm.tsx ← Form to add bookmarks
│ ├── BookmarkItem.tsx ← Displays a single bookmark
│ └── BookmarkList.tsx ← Lists all bookmarks
│
├── redux/
│ ├── features/
│ │ └── bookmark.ts ← Bookmark slice which has it's actions and reducers
│ ├── types/
│ │ └── bookmarkTypes.ts ← TypeScript types
│
├── store.ts ← Root store setup
├── App.tsx ← Renders form + list
└── index.tsx ← Redux provider setup
```

---

## 💡 Topics Covered

- React
- Redux Toolkit
- Typescript
- State management
- useSelector/useDispatch
- Clean architecture
- Component design

---

This project helps you understand React application with **Redux Toolkit**.

---

> Feel free to fork and ⭐️ this repo if it helps!
