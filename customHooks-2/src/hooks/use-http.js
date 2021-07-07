//see here for useCallback refresher =  https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25599878#overview

import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  //const [tasks, setTasks] = useState([]);//getting rid of any component-specific stuff so that we can reuse this custom hook
  //configureable items include the option object on fetch() - so we pass requestConfig param
  //what we do/how we transform data - we get rid of the loadedTasks part and instead pass an applyData func

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        //"https://customshoo-default-rtdb.firebaseio.com/tasks.json"
        requestConfig.url,
        {
          method: requestConfig.method ? requestConfig.method : "GET",
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        }
      );

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      //      const loadedTasks = [];
      //      for (const taskKey in data) {
      //        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      //      }
      //      setTasks(loadedTasks);
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return {
    //isLoading: isLoading,
    //error: error,
    //sendRequest: sendRequest,
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
