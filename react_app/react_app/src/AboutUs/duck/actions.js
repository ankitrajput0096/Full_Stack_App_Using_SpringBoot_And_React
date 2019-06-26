import * as types from './types';
import axios from 'axios';
import aboutUsUtils from './utils';
const increment = () => dispatch => {
  dispatch({
    type: types.INCREMENT,
  });
}

const decrement = () => dispatch => {
  dispatch({
    type: types.DECREMENT,
  });
}

const getTodos = () => dispatch => {
  const getUrl = 'http://localhost:8080/topics';
  dispatch({ type: types.FETCH });  // with this action object make 'isFetching' true in redux state.
  axios.get(getUrl)
    .then(function (response) {
      // handle success
      console.log(response);
      dispatch({ type: types.GET_API_DATA, payload: response.data })   // with this action upload the response in redux store and make 'isFetching' false.
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      dispatch({ type: types.GET_API_DATA, payload: []})
    })
    .finally(function () {
      // always executed
      // dispatch({ type: 'GET_TODOS_FINALLY' })
    });
}

const postMethodCall = (id, name, desc) => dispatch => {
  const postUrl = 'http://localhost:8080/topics/add';
  dispatch({ type: types.FETCH });  // with this action object make 'isFetching' true in redux state.
  const newTopic = aboutUsUtils.constructPostBody(id, name, desc);
  axios.post(postUrl , newTopic)
    .then(function (response) {
      // handle success
      console.log(response);
      dispatch({ type: types.POST_API_STATUS, payload: response.data })   // with this action upload the response in redux store and make 'isFetching' false.
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      // dispatch({ type: types.GET_API_DATA, payload: {}})
    })
    .finally(function () {
      // always executed
      // dispatch({ type: 'GET_TODOS_FINALLY' })
    });
}

const putMethodCall = (id, name, desc) => dispatch => {
  const putUrl = `http://localhost:8080/topics/update/${id}`; // using string literals here
  dispatch({ type: types.FETCH });  // with this action object make 'isFetching' true in redux state.
  const newTopic = aboutUsUtils.constructPostBody(id, name, desc);
  axios.put(putUrl , newTopic)
    .then(function (response) {
      // handle success
      console.log(response);
      dispatch({ type: types.PUT_API_STATUS, payload: response.data })   // with this action upload the response in redux store and make 'isFetching' false.
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      // dispatch({ type: types.GET_API_DATA, payload: {}})
    })
    .finally(function () {
      // always executed
      // dispatch({ type: 'GET_TODOS_FINALLY' })
    });
}

const deleteMethodCall = (id) => dispatch => {
  const postUrl = `http://localhost:8080/topics/delete/${id}`; // using string literals here
  dispatch({ type: types.FETCH });  // with this action object make 'isFetching' true in redux state.
  axios.delete(postUrl )
    .then(function (response) {
      // handle success
      console.log(response);
      dispatch({ type: types.DELETE_API_STATUS, payload: response.data })   // with this action upload the response in redux store and make 'isFetching' false.
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      // dispatch({ type: types.GET_API_DATA, payload: {}})
    })
    .finally(function () {
      // always executed
      // dispatch({ type: 'GET_TODOS_FINALLY' })
    });
}

const getGETApiDataWithDelay = () => dispatch => {
  const getUrl = 'http://localhost:8080/topicsWithDelay';
  dispatch({ type: types.FETCH });  // with this action object make 'isFetching' true in redux state.
  axios.get(getUrl)
    .then(function (response) {
      // handle success
      console.log(response);
      dispatch({ type: types.GET_API_DATA_WITH_DELAY, payload: response.data })   // with this action upload the response in redux store and make 'isFetching' false.
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      dispatch({ type: types.GET_API_DATA_WITH_DELAY, payload: []})
    })
    .finally(function () {
      // always executed
      // dispatch({ type: 'GET_TODOS_FINALLY' })
    });
}

//Public actions which are invoked from the application components
export default {
  increment,
  decrement,
  getTodos,
  postMethodCall,
  putMethodCall,
  deleteMethodCall,
  getGETApiDataWithDelay,
};
