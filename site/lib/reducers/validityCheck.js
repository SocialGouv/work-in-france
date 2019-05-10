import { createActions, handleActions } from "redux-actions";

const defaultState = { error: null, data: null, status: null, isLoading: false };

export const {
  postValidityCheckStart,
  postValidityCheckSuccess,
  postValidityCheckFail,
} = createActions({
  POST_VALIDITY_CHECK_START: (authorizationId, birthdate) => ({ authorizationId, birthdate }),
  POST_VALIDITY_CHECK_SUCCESS: response => ({ response }),
  POST_VALIDITY_CHECK_FAIL: error => ({ error }),
});

export const reducer = handleActions(
  {
    [postValidityCheckStart]: state => ({ ...state, error: null, isLoading: true }),
    [postValidityCheckSuccess]: (state, { payload: { response } }) => ({
      error: null,
      isLoading: false,
      data: response.data[0],
      status: response.status,
    }),
    [postValidityCheckFail]: (state, { payload: { error } }) => ({
      error,
      isLoading: false,
      data: [],
      status: null,
    }),
  },
  defaultState,
);
