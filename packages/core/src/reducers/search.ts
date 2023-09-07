import {
  CLEAR_REQUESTS,
  QUERY_FAILURE,
  QUERY_REQUEST,
  QUERY_SUCCESS,
  SEARCH_CLEAR,
  SEARCH_ENTRIES_FAILURE,
  SEARCH_ENTRIES_REQUEST,
  SEARCH_ENTRIES_SUCCESS,
} from '../constants';

import type { SearchAction } from '../actions/search';
import type { SearchQueryRequest } from '../interface';

export interface SearchState {
  isFetching: boolean;
  term: string;
  collections: string[];
  page: number;
  entryIds: { collection: string; slug: string }[];
  error: Error | undefined;
  requests: SearchQueryRequest[];
}

const defaultState: SearchState = {
  isFetching: false,
  term: '',
  collections: [],
  page: 0,
  entryIds: [],
  error: undefined,
  requests: [],
};

const search = (state: SearchState = defaultState, action: SearchAction): SearchState => {
  switch (action.type) {
    case SEARCH_CLEAR:
      return defaultState;

    case SEARCH_ENTRIES_REQUEST: {
      const { page, searchTerm, searchCollections } = action.payload;
      return {
        ...state,
        isFetching: true,
        term: searchTerm,
        collections: searchCollections,
        page,
      };
    }

    case SEARCH_ENTRIES_SUCCESS: {
      const { entries, page } = action.payload;
      const entryIds = entries.map(entry => ({ collection: entry.collection, slug: entry.slug }));
      return {
        ...state,
        isFetching: false,
        page,
        entryIds: !page || isNaN(page) || page === 0 ? entryIds : state.entryIds.concat(entryIds),
      };
    }

    case QUERY_FAILURE:
    case SEARCH_ENTRIES_FAILURE: {
      const { error } = action.payload;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    case QUERY_REQUEST: {
      const { searchTerm, request } = action.payload;

      const requests = [...state.requests];
      if (request) {
        requests.push(request);
      }

      return {
        ...state,
        isFetching: true,
        term: searchTerm,
        requests,
      };
    }

    case CLEAR_REQUESTS: {
      state.requests = state.requests.filter(req => req.expires >= new Date());
      break;
    }

    case QUERY_SUCCESS: {
      return {
        ...state,
        isFetching: false,
      };
    }
  }

  return state;
};

export default search;
