// @flow strict

import { all, throttle, put, call } from "redux-saga/effects";
import { fetchReviews } from "../../data/reviewService";
import type { ReviewsResponse } from "../../data/types";
import { updateReviewsAction } from "./reviewsReducer";
import { FetchMoreActionType } from "./types";

const ONE_SECOND = 1000;
const FETCH_MORE_SAGA = "reviews/saga/fetch_more";

export const fetchMoreAction = (page: number): FetchMoreActionType => ({
  type: FETCH_MORE_SAGA,
  page,
});

function* fetchMoreReviewsSaga(
  action: FetchMoreActionType,
): Generator<*, *, *> {
  try {
    const response: ReviewsResponse = yield call(fetchReviews, action.page);
    yield put(
      updateReviewsAction(response.reviews, response.hasMore, action.page),
    );
  } catch (error) {
    // for sake of simplicity I'll not handle request errors
    console.error(error);
  }
}

export function* rootSaga(): Generator<*, *, *> {
  yield all([throttle(ONE_SECOND, FETCH_MORE_SAGA, fetchMoreReviewsSaga)]);
}
