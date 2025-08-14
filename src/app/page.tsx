import { Plus } from "lucide-react";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8">
      <h1 className="font-bold text-4xl mb-6">Todo List App</h1>
      <button className="bg-purple-700 text-white w-full py-4 mb-4 flex justify-center items-center rounded">
        <p className="font-bold text-lg mr-2">Nova Tarefa</p>
        <Plus color="white" />
      </button>
      <div className="bg-gray-100 w-full p-4 rounded flex justify-between">
        <h2 className="font-bold text-lg">Tarefas</h2>
        <h2 className="font-bold text-lg">Ações</h2>
      </div>
    </div>
  );
}
