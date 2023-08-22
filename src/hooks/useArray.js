import React, { useState, useEffect } from "react";

function useArray(array) {
  const [arr, setArr] = useState(array);

  const push = element => {
    const arrCopy = [...arr];
    arrCopy.push(element);
    setArr(arrCopy);
  };

  const replace = (idx, element) => {
    const arrCopy = [...arr];
    arrCopy.splice(idx, 0, element);
    setArr(arrCopy);
  };

  const filter = f => {
    const arrCopy = [...arr];
    setArr(arrCopy.filter(item => f(item)));
  };

  const remove = idx => {
    const arrCopy = [...arr];
    arrCopy.splice(idx, 1);
    setArr(arrCopy);
  };

  const clear = () => {
    setArr([]);
  };

  const reset = array => {
    setArr(array);
  };

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
