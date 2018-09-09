// @flow strict

import _ from "lodash";
import type {
  ReviewSortingType,
  ReviewFiltersType,
} from "../../presentation/presentational/types";
import { Review } from "../entity/review";
import type {
  UpdateReviewsActionType,
  ReviewsStateSliceType,
  StateType,
} from "./types";

const INITIAL_STATE: ReviewsStateSliceType = {
  page: 0,
  list: [],
  hasMore: true,
};

const UPDATE_REVIEW = "reviews/update";

const sortByDate = (direction: "ASC" | "DESC") => (review: Review) => {
  const orderParam = review.reviewCreated;
  return direction === "ASC" ? orderParam : -orderParam;
};

export const reviewsSelector = (
  state: StateType,
  filters: ReviewFiltersType,
  direction: ReviewSortingType,
) => {
  let reviews = state.reviews.list;

  if (filters.stars.length) {
    reviews = reviews.filter(review => filters.stars.includes(review.stars));
  }

  if (direction) {
    return _.sortBy(reviews, sortByDate(direction));
  }

  return reviews;
};
export const pageSelector = (state: StateType) => state.reviews.page;
export const hasMoreSelector = (state: StateType) => state.reviews.hasMore;

export const updateReviewsAction = (
  reviews: Array<Review>,
  hasMore: boolean,
  page: number,
): UpdateReviewsActionType => ({
  type: UPDATE_REVIEW,
  reviews,
  page,
  hasMore,
});

const handleFetchMore = (
  state: ReviewsStateSliceType,
  action: UpdateReviewsActionType,
): ReviewsStateSliceType => ({
  page: action.page + 1,
  hasMore: action.hasMore,
  list: [...state.list, ...action.reviews],
});

export const reviewsReducer = (
  state: ReviewsStateSliceType = INITIAL_STATE,
  action: UpdateReviewsActionType,
): ReviewsStateSliceType => {
  switch (action.type) {
    case UPDATE_REVIEW:
      return handleFetchMore(state, action);
    default:
      return state;
  }
};
