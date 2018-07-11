// @flow strict
import React, { Component } from "react";
import { HomeLayout } from "../presentational/homeLayout";
import type {
  ReviewFiltersType,
  ReviewSortingType,
} from "../presentational/types";
import { ReviewsContainer } from "./reviewsContainer";
import { ReviewsSearchFilterContainer } from "./reviewsSearchFilter";

export type StateType = {
  filters: {
    stars: Array<number>,
  },
  sortBy: ReviewSortingType,
};

export class Home extends Component<{}, StateType> {
  state = {
    filters: {
      stars: [],
    },
    sortBy: undefined,
  };

  onFiltersChanges = (filters: ReviewFiltersType) => {
    this.setState({
      ...this.state,
      filters,
    });
  };

  onSortChanges = (sortBy: ReviewSortingType) => {
    this.setState({
      ...this.state,
      sortBy,
    });
  };

  render() {
    return (
      <HomeLayout
        header={
          <ReviewsSearchFilterContainer
            onFiltersChanges={this.onFiltersChanges}
            onSortChanges={this.onSortChanges}
          />
        }
        content={
          <ReviewsContainer
            filters={this.state.filters}
            sortBy={this.state.sortBy}
          />
        }
      />
    );
  }
}
