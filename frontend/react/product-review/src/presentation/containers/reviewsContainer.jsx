// @flow strict

import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Review } from "../../domain/entity/review";
import { groupBySelector } from "../../domain/state/groupingReducer";
import { fetchMoreAction } from "../../domain/state/reviewSaga";
import {
  reviewsSelector,
  hasMoreSelector,
  pageSelector,
} from "../../domain/state/reviewsReducer";
import type { StateType } from "../../domain/state/types";
import { ReviewsList } from "../presentational/reviewsList";
import type {
  ReviewFiltersType,
  ReviewSortingType,
  GroupByType,
} from "../presentational/types";

type PropTypes = {
  reviews: Array<Review>,
  pageNumber: number,
  hasMore: boolean,
  page: number,
  fetchMore: number => void,
  filters: ReviewFiltersType,
  sortBy: ReviewSortingType,
  groupBy: GroupByType,
};

type StateTypes = {
  isLoading: boolean,
};

const GroupFormats = {
  MONTH: "MMMM",
  WEEK: "L",
  DAY: "LL",
};

class ReviewsComponent extends Component<PropTypes, StateTypes> {
  state = {
    isLoading: false,
  };

  loadMore = () => {
    const { fetchMore, page } = this.props;
    fetchMore(page);
  };

  groupReviews = () =>
    _.groupBy(this.props.reviews, review =>
      review.reviewCreated.format(GroupFormats[this.props.groupBy]),
    );

  render() {
    console.log(this.props);
    return (
      <ReviewsList
        onEndReached={this.loadMore}
        hasMore={this.props.hasMore}
        reviewsGrouped={this.groupReviews()}
        page={this.props.page}
      />
    );
  }
}

const mapStateToProps = (state: StateType, props: PropTypes) => ({
  groupBy: groupBySelector(state),
  reviews: reviewsSelector(state, props.filters, props.sortBy),
  hasMore: hasMoreSelector(state),
  page: pageSelector(state),
});

const mapDispatchToProps = {
  fetchMore: fetchMoreAction,
};

export const ReviewsContainer = connect(mapStateToProps, mapDispatchToProps)(
  ReviewsComponent,
);
