import React, { Fragment } from "react";
import { CounterAdd } from "./components/CounterAdd";
import { CounterDisplay } from "./components/CounterDisplay";
import { CounterProvider } from "./context/CounterContext";
import { CounterSub } from "./components/CounterSub";

export const Counter = () => {
  return (
    <Fragment>
      <CounterProvider>
        <CounterAdd />
        <CounterDisplay />
        <CounterSub />
      </CounterProvider>
    </Fragment>
  );
};
