//the fetchTasks func here and the newTask component contain similar logic so we'd want to outsource logic to 3rd func. But since logic contains usage of other hooks and state, a reg func for the 3rd func wont work bc cant use hooks in regular func -> good opportunity to use custom hook to outsource HTTP logic and reuse stateful logic for loading and error states.

//we use useCallback here and in custom hook so that we can use proper dependencies in the useEffect func without causing infinite loop

import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

function App() {
  //  const [isLoading, setIsLoading] = useState(false);
  //  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);

  const httpData = useHttp();
  const { isLoading, error, sendRequest: fetchTasks } = httpData;
  //
  //  const fetchTasks = async (taskText) => {
  //    setIsLoading(true);
  //    setError(null);
  //    try {
  //      const response = await fetch(
  //        "https://customshoo-default-rtdb.firebaseio.com/tasks.json"
  //      );
  //
  //      if (!response.ok) {
  //        throw new Error("Request failed!");
  //      }
  //
  //      const data = await response.json();
  //
  //      const loadedTasks = [];
  //
  //      for (const taskKey in data) {
  //        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
  //      }
  //
  //      setTasks(loadedTasks);
  //    } catch (err) {
  //      setError(err.message || "Something went wrong!");
  //    }
  //    setIsLoading(false);
  //  };

  //useEffect(() => {
  //  fetchTasks();
  //}, []);
  useEffect(() => {
    const transformTasks = (tasksObj) => {
      const loadedTasks = [];

      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }

      setTasks(loadedTasks);
    };

    fetchTasks(
      {
        url: "https://customshoo-default-rtdb.firebaseio.com/tasks.json",
      },
      transformTasks
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
