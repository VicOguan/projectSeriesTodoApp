import React, { useEffect, useState } from "react";
import { TaskTable } from "../components/TaskTable";
import { NewTaskTable } from "../components/NewTaskTable";

export const Table = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  const [items, setItems] = useState([
    {
      rowNumber: 1,
      rowNames: "Your name",
      rowDescription: "Coding",
      rowStats: "ACTIVE",
    },
    {
      rowNumber: 2,
      rowNames: "Your name",
      rowDescription: "Debugging",
      rowStats: "COMPLETED",
    },
  ]);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addTask = (description: string, assigned: string, stats: string) => {
    let rowNumber = 0;
    if (items.length > 0) {
      rowNumber = items[items.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTask = {
      rowNumber: rowNumber,
      rowNames: assigned,
      rowDescription: description,
      rowStats: stats,
    };
    setItems((items) => [...items, newTask]);
  };

  const deleteItems = (deleteItemsNumber: number) => {
    let filtered = items.filter(function (value) {
      return value.rowNumber !== deleteItemsNumber;
    });
    setItems(filtered);
  };

  return (
    <div className="flex flex-col">
      <div className="sm:mx-6 lg:-mx-8 pb-48">
        <div className="overflow-auto inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <TaskTable items={items} deleteItems={deleteItems} />
        </div>
        <button
          className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-[#2e2b5f] disabled:cursor-not-allowed disabled:border-stone-300 disabled:bg-stone-300 disabled:shadow-none"
          onClick={() => setShowAddTask(!showAddTask)}
        >
          <span className="order-2"></span>
          {showAddTask ? "Close" : "Add new task"}
        </button>
        {showAddTask && <NewTaskTable addTask={addTask} />}
      </div>
    </div>
  );
};
