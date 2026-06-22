import MyStatic from "./MyStatic/MyStatic";
import { Link } from "react-router-dom";
import { useState } from "react";

function BookTracker({ books, setBooks }) {
  const [book, setBook] = useState({
    id: Date.now(),
    title: "",
    author: "",
    imgUrl: '',
    status: "now",
  });
  const [message, setMessage] = useState({
    text: "",
    color: "",
  });

  function showMessage(text, color = "red") {
    setMessage({ text, color });
    setTimeout(() => {
      setMessage({ text: "", color: "" });
    }, 3000);
  }

 const addBooks = (e) => {
  e.preventDefault();

  if (!book.author.trim() || !book.title.trim() || !book.imgUrl.trim()) {
    showMessage("Error, Заполните все открытые поля!");
    return;
  }

  const isExist = books.some(
    (item) =>
      item.title.toLowerCase() === book.title.trim().toLowerCase()
  );

  if (isExist) {
    showMessage("Error, книга уже добавлена!");
    return;
  }

  setBooks((prev) => [...prev, book]);

  showMessage("Успешно добавлено!", "green");

  setBook({
    id: Date.now(),
    title: "",
    author: "",
    imgUrl: "",
    status: "read",
  });
};
  return (
    <>
      <h1 className="text-center text-3xl font-bold">Книжный трекер</h1>
      <div className=" flex justify-center items-center">
        <div className="book w-100 mx-auto mt-10 bg-zinc-900 p-6 rounded-xl shadow-lg">
          <form className="flex flex-col gap-4">
            <label>
              <p className="mb-2 text-gray-300">Название книги</p>
              <input
                className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white outline-none focus:border-blue-500"
                value={book.title}
                onChange={(e) =>
                  setBook({
                    ...book,
                    title: e.target.value,
                  })
                }
                type="text"
                placeholder="Введите название книги"
              />
            </label>

            <label>
              <p className="mb-2 text-gray-300">Автор</p>
              <input
                className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white outline-none focus:border-blue-500"
                value={book.author}
                onChange={(e) =>
                  setBook({
                    ...book,
                    author: e.target.value,
                  })
                }
                type="text"
                placeholder="Введите автора книги"
              />
            </label>

            <label>
              <p className="mb-2 text-gray-300">Картина книги</p>
              <input
                className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white outline-none focus:border-blue-500"
                value={book.imgUrl}
                onChange={(e) =>
                  setBook({
                    ...book,
                    imgUrl: e.target.value,
                  })
                }
                type="text"
                placeholder="Введите автора книги"
              />
            </label>

            <button
              className=" bg-blue-600 hover:bg-blue-700 transition p-3 rounded-lg font-semibold text-white"
              onClick={addBooks}
            >
              Добавить книгу
            </button>
          </form>
          <p
            className="font-semibold text-lg text-center"
            style={{ color: message.color }}
          >
            {message.text}
          </p>
        </div>
      </div>
      <div className="contr flex justify-center gap-20">
        <div className="mybook border text-lg text-white rounded-lg font-bold bg-blue-800">
          <Link to="/mybooks">Мои книги</Link>
        </div>
        <div className="mystatic border text-lg font-bold text-white rounded-lg bg-blue-800">
            <Link to='/mystatic'>Моя статистика</Link>
        </div>
      </div>
    </>
  );
}
export default BookTracker;
