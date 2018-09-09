// @flow strict

import type { GroupByType } from "../../presentation/presentational/types";
import type { ReviewsStateSliceType, StateType } from "./types";
import { ChangeGroupingActionType } from "./types";

const INITIAL_STATE: GroupByType = "MONTH";
export const CHANGE_GROUPING = "grouping/change";

export const groupBySelector = (state: StateType) => state.groupBy;

export const changeGroupingAction = (
  groupBy: GroupByType,
): ChangeGroupingActionType => ({
  type: CHANGE_GROUPING,
  groupBy,
});

const handleChangeGroup = (
  state: GroupByType,
  action: ChangeGroupingActionType,
) => action.groupBy;

export const groupByReducer = (
  state: GroupByType = INITIAL_STATE,
  action: ChangeGroupingActionType,
): ReviewsStateSliceType => {
  switch (action.type) {
    case CHANGE_GROUPING:
      return handleChangeGroup(state, action);
    default:
      return state;
  }
};
