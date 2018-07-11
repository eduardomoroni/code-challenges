// @flow

import Moment from "moment/moment";
import { Review } from "../review";

const backendReview = {
  country: "US",
  reviewId: "R3G02WD3YAQTWF",
  childAsin: "B01FOREDY2",
  authorId: "",
  title: "Five Stars",
  content:
    "Ordered as a gift for my girlfriend. She hasn't complained about it, so 5 Stars!",
  stars: 5,
  verified: true,
  reviewCreated: 1510099200000,
  productImg: "71b79%2B9NN%2BL",
  productTitle:
    "Mini Exercise Ball with Pump - 9 Inch Bender Ball for Stability, Barre, Pilates,",
  watched: false,
  created: 1517389316000,
};

describe("Review Domain Entity", () => {
  it("create a domain representation from backend representation", async () => {
    const review = new Review(backendReview);

    expect(review.id).toEqual(backendReview.reviewId);
    expect(review.country).toEqual(backendReview.country);
    expect(review.title).toEqual(backendReview.title);
    expect(review.content).toEqual(backendReview.content);
    expect(review.productTitle).toEqual(backendReview.productTitle);
    expect(review.stars).toEqual(backendReview.stars);
    expect(review.watched).toEqual(backendReview.watched);
    expect(review.verified).toEqual(backendReview.verified);
    expect(review.created).toEqual(Moment(backendReview.created));
    expect(review.reviewCreated).toEqual(Moment(backendReview.reviewCreated));
  });
});
