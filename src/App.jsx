import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import BookTracker from "./Book-tracker/BookTracker";
import MyBooks from "./Book-tracker/MyBooks/MyBooks";
import MyStatic from "./Book-tracker/MyStatic/MyStatic";
function App() {
  const [books, setBooks] = useState([]);
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<BookTracker books={books} setBooks={setBooks}/>} />
        <Route path="/mybooks" element={<MyBooks books={books} setBooks={setBooks}/>} />
        <Route path="/mystatic" element={<MyStatic />}/>
      </Routes>
    </div>
  );
}

export default App;
