import { take, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  postValidityCheckStart,
  postValidityCheckSuccess,
  postValidityCheckFail,
} from "../reducers/validityCheck";

function postValidityCheckApi(params) {
  const url = `https://wif-bo-api.incubateur.social.gouv.fr/api/v1/apt_validity_check/${
    params.authorizationId
  }/${params.birthdate}`;

  const headers = {
    "content-type": "application/json",
  };

  return axios.request({
    method: "get",
    url,
    headers,
  });
}

export function* postValidityCheck({ authorizationId, birthdate }) {
  try {
    const { data: response } = yield call(postValidityCheckApi, { authorizationId, birthdate });
    yield put(postValidityCheckSuccess(response));
  } catch (error) {
    yield put(postValidityCheckFail(error));
  }
}

export function* watchPostValidityCheck() {
  while (true) {
    const {
      payload: { authorizationId, birthdate },
    } = yield take(postValidityCheckStart);
    yield call(postValidityCheck, { authorizationId, birthdate });
  }
}
