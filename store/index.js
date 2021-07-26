import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer";
import emojiSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, {}, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(emojiSaga);

export default store;
