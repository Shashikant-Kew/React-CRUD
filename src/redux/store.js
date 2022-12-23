import { createStore, applyMiddleware, compose } from 'redux';
import { cre } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer/index';
import rootSaga from './saga/index';

const sagaMiddleware = createSagaMiddleware();
const store = compose(
  applyMiddleware(sagaMiddleware)
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;