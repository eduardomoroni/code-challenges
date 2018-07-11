// @flow strict

import * as Axios from "axios";
import { Review } from "../../domain/entity/review";
import { fetchReviews } from "../reviewService";
import PageOne from "./static/pageOne";

jest.mock("axios");

describe("Review Service", () => {
  beforeAll(() => {
    Axios.get.mockReturnValue(
      Promise.resolve({ data: PageOne, hasMore: true }),
    );
  });

  xit("calls api and maps response into domain entity", async () => {
    const { reviews } = await fetchReviews(1);

    expect(reviews).toHaveLength(PageOne.reviews.length);
    reviews.forEach((review, index) => {
      expect(review).toBeInstanceOf(Review);
      expect(review.id).toEqual(PageOne.reviews[index].reviewId);
    });
  });
});
