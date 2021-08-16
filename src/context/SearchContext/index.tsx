import * as React from "react";

import { ISearchContext } from "./model";
import { reducer, initialState } from "./reducer";
import { useActions } from "./useActions";

const initialContext = {
  state: initialState,
  actions: {},
};

const SearchContext = React.createContext<ISearchContext>(
  initialContext as ISearchContext
);

export const SearchContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const actions = useActions(dispatch);
  const value = React.useMemo(() => ({ state, actions }), [state, actions]);

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export const useSearchContext = (): ISearchContext =>
  React.useContext(SearchContext);
