// @flow strict

import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  groupBySelector,
  changeGroupingAction,
} from "../../domain/state/groupingReducer";
import type { StateType } from "../../domain/state/types";
import { ReviewsFilterForm } from "../presentational/reviewsFilterForm";
import type {
  ReviewFiltersType,
  ReviewSortingType,
  GroupByType,
} from "../presentational/types";

type PropTypes = {
  onFiltersChanges: ReviewFiltersType => void,
  onSortChanges: ReviewSortingType => void,
  onGroupByChange: GroupByType => void,
  groupBy: GroupByType,
};

class ReviewsFilterComponent extends PureComponent<PropTypes> {
  render() {
    const {
      onFiltersChanges,
      onSortChanges,
      groupBy,
      onGroupByChange,
    } = this.props;

    return (
      <ReviewsFilterForm
        onFiltersChanges={onFiltersChanges}
        onSortChanges={onSortChanges}
        groupBy={groupBy}
        onGroupByChange={onGroupByChange}
      />
    );
  }
}

const mapStateToProps = (state: StateType) => ({
  groupBy: groupBySelector(state),
});

const mapDispatchToProps = {
  onGroupByChange: changeGroupingAction,
};

export const ReviewsSearchFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReviewsFilterComponent);
