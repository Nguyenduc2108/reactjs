import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [work, setWork] = useState("");
  const [todos, setTodos] = useState([]);

  //add job
  const handleAdd = () => {
    if (todos?.some((item) => item.id === work?.replace(/\s/g, ""))) {
      toast.warn("Công việc đã được thêm vào trước đó.");
    } else {
      setTodos((prev) => [
        ...prev,
        { id: work?.replace(/\s/g, ""), job: work },
      ]);
      setWork("");
    }
  };

  //remove job
  const handleRemoveJob = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="h-screen flex flex-col gap-8 justify-center border border-red-500 items-center">
        <div className="flex gap-8">
          <input
            type="text"
            className="outline-none  border border-blue-600 px-4 py-2 w-[400px]"
            value={work}
            onChange={(e) => setWork(e.target.value)}
          />
          <button
            type="button"
            className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        <div>
          <h3 className="font-bold text-xl">Content: </h3>
          <ul>
            {todos?.map((item) => {
              return (
                <li
                  key={item.id}
                  className="flex gap-10 items-center justify-between my-[8px]  border border-red-600 "
                >
                  <span className="my-2 ">{item.job}</span>
                  <span
                    onClick={() => handleRemoveJob(item.id)}
                    className="my-2 cursor-pointer p-2"
                  >
                    X
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        // transition: Bounce,
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default App;
