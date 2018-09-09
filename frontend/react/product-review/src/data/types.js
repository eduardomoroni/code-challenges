import type { ReviewBackendType } from "../domain/entity/review";
import { Review } from "../domain/entity/review";

export type AxiosResponse<T> = {
  data: T,
  status: number,
};

export type GetReviewType = {
  reviews: Array<ReviewBackendType>,
  hasMore: boolean,
};

export type ReviewsResponse = {
  reviews: Array<Review>,
  hasMore: boolean,
};
