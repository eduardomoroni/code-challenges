// @flow strict

import React from "react";
import { Icon } from "semantic-ui-react";

type PropTypes = {
  stars: number,
};

const STARS_RANGE = [1, 2, 3, 4, 5];
const renderStars = (stars: number) => (
  <a>
    {STARS_RANGE.map(key => (
      <Icon name={key <= stars ? "star" : "star outline"} key={key} />
    ))}
  </a>
);

export const ReviewStars = (props: PropTypes) => (
  <React.Fragment>
    <p>STARS</p>
    {renderStars(props.stars)}
  </React.Fragment>
);
