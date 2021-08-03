import { call, put, takeEvery } from "redux-saga/effects";

export const fetchEmojis = async () => {
  return fetch("https://api.github.com/emojis").then((res) => res.json());
};

export function* requestEmojis() {
  const emojis = yield call(fetchEmojis);
  yield put({ type: "SET_EMOJIS", emojis });
}

function* emojiSaga() {
  yield takeEvery("REQUEST_EMOJIS", requestEmojis);
}

export default emojiSaga;
