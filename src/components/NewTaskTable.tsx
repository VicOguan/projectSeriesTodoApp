import React, { useState } from "react";

export const NewTaskTable: React.FC<{
  addTask: Function;
}> = (props) => {
  const [description, setDescription] = useState("");
  const [assigned, setAssigned] = useState("");
  const [stats, setStats] = useState("");

  const submitTask = () => {
    if (description !== "" && assigned !== "" && stats !== "") {
      props.addTask(description, assigned, stats);
      setAssigned("");
      setDescription("");
      setStats("");
    }
  };

  return (
    
    <div className="bg-[#F8E8EE] rounded shadow-md text-slate-900 shadow-slate-200">
      <div className="p-10 border-2">
        <form>
          <div className="relative z-0 w-full mb-6 group">
            <input
              onChange={(e) => setAssigned(e.target.value)}
              value={assigned}
              type="name"
              name="name"
              id="name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              aria-rowcount={2}
              type="description"
              name="description"
              id="description"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Description
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">

            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Status
            </label>
            <select
              onChange={(e) => setStats(e.target.value)}
              value={stats}
              aria-rowcount={3}
              name="status"
              id="status"
              placeholder=""
              required
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            >
              <option value=""></option>
              <option value="ACTIVE">ACTIVE</option>
              <option value="COMPLETED">COMPLETED</option>
              <option value="INCOMPLETE">INCOMPLETE</option>
            </select>
          </div>

          <button
            onClick={submitTask}
            type="submit"
            className="text-white bg-[#2e2b5f] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add task
          </button>
        </form>
      </div>
    </div>
  );
};
