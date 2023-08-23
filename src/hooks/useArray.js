import React, { useState, useCallback } from "react";

function useArray(array) {
  const [arr, setArr] = useState(array);

  // const push = element => {
  //   setArr(arr => [...arr, element]);
  // };
  // re-formated to useCallback hook - this will ensure that the function is not recreated on every re-render
  const push = useCallback(element => {
    setArr(arr => [...arr, element]);
  }, []);

  const replace = useCallback((idx, element) => {
    setArr(arr => {
      return [...arr.slice(0, idx), element, ...arr.slice(idx + 1)];
    });
  }, []);

  const filter = useCallback(f => {
    setArr(arr => {
      return arr.filter(f);
    });
  }, []);

  const remove = useCallback(idx => {
    setArr(arr => {
      return [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    });
  }, []);

  const clear = useCallback(() => {
    setArr([]);
  }, []);

  const reset = useCallback(
    array => {
      setArr(array);
    },
    [array]
  );

  return {
    array: arr,
    set: setArr,
    push: push,
    replace: replace,
    filter: filter,
    remove: remove,
    clear: clear,
    reset: reset,
  };
}

export default useArray;

// Create a custom useArray hook that takes an array (or a function that returns an array) as its only argument, stores that array in state, and returns an object with the following properties:
// array - This is the array stored in state
// set - This is just the set state function returned from useState
// push - A function that takes one argument and adds that argument to the end of the array
// replace - A function that takes two arguments (the index of the element to replace, and the new element to replace the old element with) and replaces the element at the specified index with the new element
// filter - A function that takes one argument (a callback function) and filters the array just like the array.filter method
// remove - A function that takes one argument (the index of the element to remove) and removes the element at the index specified
// clear - A function that will remove all elements from the array
// reset - A function that will reset the array to its initial value
