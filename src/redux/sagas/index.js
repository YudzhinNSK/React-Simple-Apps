import {takeEvery, call, put, fork} from 'redux-saga/effects'
import { LOADING_FINISH, LOADING_START, LOG_IN, LOGIN_ERROR, GET_NEWS, SET_LATEST_NEWS_ERROR } from "../constants";
import { getLatestNews, getUser } from "../../api";
import { LOG_IN_SUCCESS } from "../../api/constants";
import { setLatestNews } from "../actions/actionCreator";

export function* handleLogIn(data){
  yield put({type: LOADING_START})
  const result = yield call(getUser, data)
  if(result.error){
    yield put({ type: LOGIN_ERROR, message: result.error });
    yield put({type: LOADING_FINISH})
  }
  if(result.message){
    yield put({type: LOG_IN_SUCCESS} );
    yield put({type: LOADING_FINISH})
  }
}

export function* handleLatestNews() {
  try {
    yield put({type: LOADING_START})
    const { hits } = yield call(getLatestNews, 'react');
    yield put(setLatestNews(hits));
    yield put({type: LOADING_FINISH})
  } catch {
    yield put({ type: SET_LATEST_NEWS_ERROR, payload: 'Error fetching latest news' });
    yield put({type: LOADING_FINISH})
  }
}

export function* handleNews(){
  yield fork(handleLatestNews);
}

export function* watchClickSaga(){
  yield takeEvery(GET_NEWS, handleNews)
  yield takeEvery(LOG_IN, handleLogIn)
}

export default function* rootSaga(){
  yield watchClickSaga();
}