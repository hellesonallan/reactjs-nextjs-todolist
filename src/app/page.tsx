export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Todo List App</h1>
      <button className="bg-purple-700 text-white w-full py-2">
        <p className="font-bold">Nova Tarefa</p>
      </button>
    </div>
  );
}
