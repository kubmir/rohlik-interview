import { Action, ActionTypes, IActions } from "./model";

export const useActions = (dispatch: React.Dispatch<Action>): IActions => ({
  updateSearchQuery: (newQuery: string) =>
    dispatch({ type: ActionTypes.UPDATE_SEARCH_QUERY, value: newQuery }),
});
