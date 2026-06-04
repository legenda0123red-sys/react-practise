import { useState } from "react";

export const Catalog = ({ title, genre, rating }) => {
  const [showRat, setShowRat] = useState(false);

  return (
    <div className="game">
      <h1>{title}</h1>
      <h2>Жанр: {genre}</h2>

      <button onClick={() => setShowRat((prev) => !prev)}>
        {showRat ? "Скрыть рейтинг" : "Показать рейтинг"}
      </button>

      {showRat && <p>Рейтинг: {rating}</p>}

      {showRat && (
        <p>
          {rating >= 8 ? "🔥 Топ игра" : "👍 Нормальная игра"}
        </p>
      )}
    </div>
  );
};