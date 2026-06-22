import { Link } from "react-router-dom";
function MyBooks({ books, setBooks}) {
  const Finish = (id) => {
    setBooks((prev) => {
      return prev.map((item) => {
        if (item.id !== id) {
          return
        }

        if (item.status === 'now'){
          return{
            ...item,
            status: item.status = 'read'
          }
        }

        if (item.status === 'read'){
          return{
            ...item,
            status: item.status = 'done'
          }
        }
        return item
      })
    })
  }
  
  return (
    <>
      <h1 className="text-center text-2xl font-bold text-blue-500">
        Мои книги
      </h1>
      <div className="mybooks flex flex-wrap justify-around">
        {books.map((item) => {
          return (
            <div key={item.id} className="mybook w-80 h-120 border text-blue-600 bg-white shadow-2xl rounded-2xl">
              <img className="w-full h-60" src={item.imgUrl} alt={item.title} />
              <div className="text text-center">
                <h2 className="text-2xl font-bold">Название: {item.title}</h2>
                <p className="text-2xl font-bold">Автор: {item.author}</p>
                <p className="text-lg font-bold">
                  Статус вашей книги:
                  <span className=" text-green-500 font-semibold"> {item.status === 'now' ? 'В процессе' : item.status === 'read' ? 'Прочитал' : item.status === 'done' ? 'Завершено' : ''}</span>
                </p>
              </div>
              <div className="but text-center text-lg font-semibold border rounded-lg">
                <button onClick={() => Finish(item.id)}>{item.status === 'now' ? 'Отметить прочитанной' : 'Завершить!'}</button>
              </div>
            </div>
          );
        })}
      </div>
      {books.length === 0 && <p className="text-2xl text-center font-bold text-gray-500">Пока нет книг</p>}
      <button className="btn border w-35 bg-blue-700 text-2xl text-white font-semibold rounded-lg">
        <Link to='/'>Назад</Link>
      </button>
    </>
  );
}
export default MyBooks;
