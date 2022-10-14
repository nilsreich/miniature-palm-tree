import React, { createContext, useContext, ReactNode } from "react";
import { useImmerReducer } from "use-immer";

//Create Context
export const CounterContext = createContext<State>({ count: 0 });
export const CounterDispatchContext = createContext<any>(null);

// Actions for dispatcher
export const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

// Reducer
type Action = {
  type: "INCREMENT" | "DECREMENT";
  payload: () => void;
};
type State = {
  count: number;
};
const reducer = (draft: State, action: Action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      draft.count++;
      break;
    case ACTIONS.DECREMENT:
      draft.count--;
      break;
  }
};

// Provider
interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export const CounterProvider = ({ children }: Props) => {
  //create ImmerReducer
  const [state, dispatch] = useImmerReducer(reducer, {
    count: 0,
  });
  return (
    <CounterContext.Provider value={state}>
      <CounterDispatchContext.Provider value={dispatch}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterContext.Provider>
  );
};

export function useCounterDispatch() {
  return useContext(CounterDispatchContext);
}

export function useCounter() {
  return useContext(CounterContext);
}
