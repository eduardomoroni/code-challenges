import type { GroupByType } from "../../presentation/containers/reviewsSearchFilter";

export type ReviewsStateSliceType = {|
  page: number,
  list: Array<Review>,
  hasMore: boolean,
|};

export type StateType = {|
  reviews: ReviewsStateSliceType,
  groupBy: GroupByType,
|};

export type PayloadLessAction = {|
  type: string,
|};

export type FetchMoreActionType = {|
  type: string,
  page: number,
|};

export type UpdateReviewsActionType = {|
  type: string,
  reviews: Array<Review>,
  page: number,
  hasMore: boolean,
|};

export type ChangeGroupingActionType = {|
  type: string,
  groupBy: GroupByType,
|};
