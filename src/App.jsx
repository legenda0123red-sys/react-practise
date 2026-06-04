import { useState } from "react";
import { Props } from "./props/props";
const App = () => {
  const [sec, setSec] = useState(0);

  // return (
  //   <div className="flex min-h-screen items-center justify-center bg-slate-100">
  //     <div className="rounded-xl bg-white p-8 shadow-lg text-center">
  //       <p className="mb-4 text-6xl font-bold text-blue-500">{sec}</p>
  //       <div className="flex justify-between w-[200px]">
  //         <button className="py-[10px] px-[20px] text-white text-2xl bg-blue-800" onClick={() => setSec((prev) => prev + 1)}>+</button>
  //         <button className="py-[10px] px-[20px] text-white text-2xl bg-blue-800" onClick={() => setSec((prev) => prev - 1)}>-</button>
  //       </div>
  //     </div>
  //     <Todo />
  //   </div>
  // const products = [
  //   {
  //     id: 1,
  //     title: "Ноутбук",
  //     price: 50000,
  //   },
  //   {
  //     id: 2,
  //     title: "Смартфон",
  //     price: 30000,
  //   },
  //   {
  //     id: 3,
  //     title: "Наушники",
  //     price: 5000,
  //   },
  //   {
  //     id: 4,
  //     title: "Клавиатура",
  //     price: 2500,
  //   },
  // ];
  // );

  const movies = [
  {
    id: 1,
    title: "Интерстеллар",
    rating: 9,
  },
  {
    id: 2,
    title: "Форсаж 10",
    rating: 6,
  },
  {
    id: 3,
    title: "Начало",
    rating: 8,
  },
  {
    id: 4,
    title: "Трансформеры",
    rating: 7,
  },
];
  return (
    <>
      {/* <Props name="sasha" age="12" city="bishkek" />
      <Props name="sasha2" age="14" city="bishkek2" />
      <Props name="sasha3" age="14" city="bishkek3" /> */}

      {/* <Props text="add"/>
      <Props text="delete"/>
      <Props text="follow"/> */}

      {/* {products.map((el) => {
        return <Props key={el.id} title={el.title} price={el.price}/>
      })} */}
      
      {/* Movies */}
      {/* {movies.map((item) => {
       return <Props key={item.id} title={item.title} rating={item.rating}/>
      })} */}
    </>
   
  );
};

export default App;
