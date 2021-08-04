import { requestEmojis, fetchEmojis } from "../sagas/index";
import { put, call } from "redux-saga/effects";

describe("saga test", () => {
  const gen = requestEmojis();

  test("requestEmojis", () => {
    expect(gen.next().value).toEqual(call(fetchEmojis));
    expect(gen.next().value).toEqual(
      put({ type: "SET_EMOJIS", emojis: undefined })
    );
  });
});
