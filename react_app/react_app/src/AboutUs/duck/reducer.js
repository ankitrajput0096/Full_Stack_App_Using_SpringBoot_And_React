import * as types from './types';

const initialState = {
  value: 0,
  receivedAt: null,
  isFetching: false,
  getApiData: [],
  postApiDataStatus: 'no post data',
  putApiDataStatus: 'no put data',
  deleteApiDataStatus: 'no delete data',
};

const IncDecReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        value: state.value + 1,
        receivedAt: Date.now(),
      };
    case types.DECREMENT:
      return {
        ...state,
        value: state.value - 1,
        receivedAt: Date.now(),
      };
    case types.FETCH:
      return {
        ...state,
        isFetching: true
      };
    case types.GET_API_DATA:
      return {
        ...state,
        getApiData: action.payload,
        isFetching: false
      }
    case types.POST_API_STATUS:
      return {
        ...state,
        postApiDataStatus: action.payload,
        isFetching: false
      }
    case types.PUT_API_STATUS:
      return {
        ...state,
        putApiDataStatus: action.payload,
        isFetching: false
      }
    case types.DELETE_API_STATUS:
      return {
        ...state,
        deleteApiDataStatus: action.payload,
        isFetching: false
      }
    case types.GET_API_DATA_WITH_DELAY:
      return {
        ...state,
        getApiData: action.payload,
        isFetching: false
      }
    default:
      return state;
  }
};

export default IncDecReducer;
