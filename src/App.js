import "./App.css";
import Addlist from "./components/AddList";
import ToDoTab from "./components/ToDoTab";

function App() {
  return (
    <div className="w-screen h-screen px-40 py-16 bg-[#121212]">
      <div className="text-5xl h-full flex flex-shrink-0 overflow-hidden flex-col items-center text-white bg-[#242526] rounded-md py-4 shadow-white">
        <div className="text-5xl font-bold text-center">To do list!</div>
        <div className="flex flex-row w-full h-full place-items-start">
          <Addlist />
          <ToDoTab />
        </div>
      </div>
    </div>
  );
}

export default App;
