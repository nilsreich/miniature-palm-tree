import { ACTIONS, useCounterDispatch } from "../context/CounterContext";
import React from "react";
import { PlusIcon } from "@radix-ui/react-icons";

export const CounterAdd = () => {
  const dispatch = useCounterDispatch();
  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  return (
    <button onClick={increment}>
      <PlusIcon />
    </button>
  );
};
