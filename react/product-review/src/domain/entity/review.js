// @flow strict
import Moment from "moment";

export class Review {
  id: string;
  country: string;
  title: string;
  content: string;
  productTitle: string;
  stars: number;
  watched: boolean;
  verified: boolean;
  created: Moment;
  reviewCreated: Moment;

  constructor(review: ReviewBackendType) {
    this.id = review.reviewId;
    this.country = review.country;
    this.title = review.title;
    this.content = review.content;
    this.productTitle = review.productTitle;
    this.stars = review.stars;
    this.watched = review.watched;
    this.verified = review.verified;
    this.created = Moment(review.created);
    this.reviewCreated = Moment(review.reviewCreated);
  }
}

export type ReviewBackendType = {
  country: string,
  reviewId: string,
  childAsin: string,
  authorId: string,
  title: string,
  content: string,
  stars: number,
  verified: boolean,
  reviewCreated: number,
  productImg: string,
  productTitle: string,
  watched: boolean,
  created: number,
};
