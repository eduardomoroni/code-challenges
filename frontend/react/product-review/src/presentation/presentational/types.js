// @flow strict

export type ReviewSortingType = "DESC" | "ASC" | typeof undefined;
export type GroupByType = "DAY" | "WEEK" | "MONTH";

export type ReviewFiltersType = {
  stars: Array<number>,
  groupBy: GroupByType,
  onGroupByChange: GroupByType => void,
};

export type EventContentType = {
  value: number | string | Array<*>,
  name: string,
};
