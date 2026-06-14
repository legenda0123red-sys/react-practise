import { useEffect, useState } from "react";
import { HabitStatic } from "../HabitStatic/HabitStatic";
function HabitForm() {
  const [message, setMessage] = useState({
    text: "",
    color: "",
  });
  const [habit, setHabit] = useState(""); // одно значение инпута
  const [habits, setHabits] = useState([]); // массив привычек

  function showMessage(text, color = "green") {
    setMessage({ text, color });
    setTimeout(() => {
      setMessage({ text: "", color: "" });
    }, 2000);
  }

  const addHabit = () => {
    if (!habit.trim()) {
      showMessage("Ошибка, поле ввода пустое!", "red");
      return;
    }

    const newHabit = {
      id: Date.now(),
      text: habit,
      completed: false,
    };

    setHabits([...habits, newHabit]);
    showMessage("Успешно добавлено!");
    setHabit("");
  };

  
  useEffect(() => {
  const savedHabits = localStorage.getItem("habits");

  if (savedHabits) {
    setHabits(JSON.parse(savedHabits));
  }
}, []);

  useEffect(() => {
      localStorage.setItem('habits', JSON.stringify(habits))
  }, [habits])

  const delHabit = (id) => {
    const filterHabit = habits.filter((el) => el.id !== id);
    setHabits(filterHabit);
  };
  const FinishHabit = (id) => {
    const updatedHabits = habits.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }

      return item;
    });

    setHabits(updatedHabits);
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center text-3xl font-bold ">Трекер привычек</h1>
        <div className="controls flex flex-col items-center">
          <div className="text flex gap-10">
            <input
              className="border w-[300px] rounded-lg font-bold text-[20px]"
              type="text"
              placeholder="Введите вашу привычку"
              value={habit}
              onChange={(e) => setHabit(e.target.value)}
            />
            <button
              className="border w-37.5 rounded-lg bg-[green] text-white text-[19px] font-bold"
              onClick={addHabit}
            >
              Добавить
            </button>
          </div>
          <p className="text-2xl font-bold" style={{ color: message.color }}>
            {message.text}
          </p>
        </div>
        <div className="habits flex flex-col items-center gap-5">
          {habits.map((item) => {
            return (
              <>
                <div key={item.id} className="habit flex gap-5 items-center">
                  <input
                    className="w-9 h-9"
                    type="checkbox"
                    name=""
                    id=""
                    onChange={() => FinishHabit(item.id)}
                    checked={item.completed}
                  />

                  <p
                    className={`text-2xl font-bold ${item.completed ? "line-through decoration-4" : ""}`}
                  >
                    {item.text}
                  </p>

                  <button
                    className="border w-15  hover:bg-green-500"
                    onClick={() => delHabit(item.id)}
                  >
                    ❌
                  </button>
                </div>
              </>
            );
          })}
        </div>
        <HabitStatic habits={habits}/>
      </div>
    </>
  );
}
export default HabitForm;
