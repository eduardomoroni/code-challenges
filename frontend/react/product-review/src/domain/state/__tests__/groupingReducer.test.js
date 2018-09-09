// @flow

import {
  changeGroupingAction,
  CHANGE_GROUPING,
  groupByReducer,
  groupBySelector,
} from "../groupingReducer";

describe("Review dux", () => {
  it("exposes action creator", () => {
    const groupBy = "DAY";
    const action = changeGroupingAction(groupBy);
    const expectedAction = {
      type: CHANGE_GROUPING,
      groupBy,
    };

    expect(action).toEqual(expectedAction);
  });

  it("changes state to update groupBy", () => {
    const groupBy = "DAY";

    const state = groupByReducer("MONTH", changeGroupingAction(groupBy));
    expect(state).toEqual(groupBy);
  });

  it("selects groupBy", () => {
    const groupBy = "MONTH";
    const state: any = { groupBy };
    expect(groupBySelector(state)).toEqual(groupBy);
  });
});
