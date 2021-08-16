export interface ISearchContext {
  actions: IActions;
  state: ISearchState;
}

export interface IActions {
  updateSearchQuery: (newQuery: string) => void;
}

export enum ActionTypes {
  UPDATE_SEARCH_QUERY = "UPDATE_SEARCH_QUERY",
}

export type Action = { type: ActionTypes.UPDATE_SEARCH_QUERY; value: string };

export interface ISearchState {
  searchQuery: string;
}
