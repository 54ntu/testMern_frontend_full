import React from "react";

const Home = () => {
  return (
    <div>
      <h1>this one is home page</h1>

      <div className="bg-purple-600 min-h-screen flex items-center text-lg">
        <form
          action=""
          className="p-10 md:w-2/3 lg:w-1/2 mx-auto rounded space-y-6"
        >
          <div className="shadow ">
            <div className="flex items-center bg-purple-400 rounded-lg border-purple-500 border-b">
              <label
                for="name"
                className="w-20 text-right mr-8 p-4 text-purple-200"
              >
                task
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="write down your task"
                className="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300  outline-none text-white overflow-ellipsis overflow-hidden"
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
