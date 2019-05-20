import { all } from "redux-saga/effects";
import { watchPostValidityCheck } from "./validityCheck";

export default function* rootSaga() {
  try {
    yield all([watchPostValidityCheck()]);
  } catch (err) {
    /* eslint-disable no-console */
    console.log(err);
    /* eslint-enable no-console */
  }
}
