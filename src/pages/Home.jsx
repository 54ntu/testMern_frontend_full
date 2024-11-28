import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({
    title: "",
  });
  const getTask = async () => {
    const response = await axios.get(
      "https://backend-mern-full.onrender.com/api/v1/gettask"
    );
    // console.log(response.data.data);
    setTasks(response.data.data);
  };

  //   console.log(tasks);

  useEffect(() => {
    getTask();
  }, []);

  const handleChange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };
  // console.log(task);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://backend-mern-full.onrender.com/api/v1/add",
      task
    );
    // console.log(response);
    if (response.status === 200) {
      toast.success("task added successfully.!");

      //updating tasks instantly by appending the new task
      setTasks((prevtask) => [...prevtask, response.data.data]);
      setTask({ title: "" });
    }
  };

  return (
    <div>
      <h1>this one is home page</h1>

      <div className="bg-purple-600 min-h-screen flex flex-col items-center text-lg space-y-3">
        {tasks.map((task) => {
          return (
            <div
              key={task._id}
              className="mt-8 h-[55px] w-[343px] md:w-[530px] p-3 text-center  bg-purple-400 rounded-lg border-purple-500 border-b"
            >
              <h3>{task.title}</h3>
            </div>
          );
        })}

        <form
          onSubmit={handleSubmit}
          className="p-10 md:w-2/3 lg:w-1/2 mx-auto rounded space-y-6"
        >
          <div className="shadow ">
            <div className="flex items-center bg-purple-400 rounded-lg border-purple-500 border-b">
              <label
                htmlFor="name"
                className="w-20 text-right mr-8 p-4 text-purple-200"
              >
                task
              </label>
              <input
                type="text"
                name="title"
                id="name"
                placeholder="write down your task"
                className="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300  outline-none text-white overflow-ellipsis overflow-hidden"
                onChange={handleChange}
              />
            </div>
          </div>
          <button className="bg-pink-400 block w-full rounded py-4 text-white font-bold shadow">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
