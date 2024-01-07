import "./App.css";
import deleteICon from "./assets/delete.svg";

function App() {
  return (
    <>
      <div className="bg-black flex flex-col h-[100vh] justify-center items-center">
        <div>
          <h1 className="text-white text-3xl mb-4">TO-DO</h1>
        </div>
        <div className="w-72">
          <form action="">
            <input
              type="text"
              placeholder="Type here.."
              className="w-full mb-2 rounded-sm h-8 border text-black p-1"
            />
            <button
              type="submit"
              className="w-full bg-green-500 text-white hover:bg-green-700 rounded-sm h-8"
            >
              Add
            </button>
          </form>
          <div className="w-full h-72 mt-2 overflow-y-scroll">
            <div className="flex  items-center p-2 bg-green-200 mb-2 border border-slate-500  rounded-sm">
              <input className="" type="checkbox" name="" id="" />
              <p className="flex-1 mx-2">sample</p>
              <button><img className="h-[14px]" src={deleteICon} alt="" /></button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
