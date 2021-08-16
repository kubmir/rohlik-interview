import { Action, ActionTypes, ISearchState } from "./model";

export const initialState = {
  searchQuery: "",
};

export const reducer = (state: ISearchState, action: Action): ISearchState => {
  switch (action.type) {
    case ActionTypes.UPDATE_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.value,
      };
  }
};
