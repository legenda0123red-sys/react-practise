export const HabitStatic = ({habits}) => {
    return(
        <>
       <h1 className="mb-8 text-center text-3xl font-bold text-slate-800">
  📊 Статистика ваших привычек
</h1>

<div className="controler grid gap-4 md:grid-cols-3">
  <div className="rounded-2xl bg-white p-6 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl">
    <p className="text-sm text-slate-500">Всего привычек</p>
    <p className="mt-2 text-4xl font-bold text-slate-800">
      {habits.length}
    </p>
  </div>

  <div className="rounded-2xl bg-green-50 p-6 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl">
    <p className="text-sm text-green-600">Выполнено</p>
    <p className="mt-2 text-4xl font-bold text-green-700">
      {habits.filter((item) => item.completed).length}
    </p>
  </div>

  <div className="rounded-2xl bg-red-50 p-6 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl">
    <p className="text-sm text-red-600">Осталось</p>
    <p className="mt-2 text-4xl font-bold text-red-700">
      {habits.filter((item) => !item.completed).length}
    </p>
  </div>
</div>
        </>
    )
}