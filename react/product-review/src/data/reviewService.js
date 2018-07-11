// @flow strict

import { get } from "axios";
import { Review } from "../domain/entity/review";
import type { AxiosResponse, GetReviewType, ReviewsResponse } from "./types";

export const fetchReviews = async (
  pageNumber: number,
): Promise<ReviewsResponse> => {
  const response: AxiosResponse<GetReviewType> = await get(
    `reviews/${pageNumber}`,
  );
  const { reviews, hasMore } = response.data;

  return {
    reviews: reviews.map(backendReview => new Review(backendReview)),
    hasMore,
  };
};
