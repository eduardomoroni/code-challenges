// @flow strict

import React from "react";
import { Card, Grid } from "semantic-ui-react";
import { Review } from "../../domain/entity/review";
import { ReviewStars } from "./reviewStars";

type PropTypes = {
  review: Review,
};

export const ReviewComponent = (props: PropTypes) => (
  <Card style={{ width: "100%" }}>
    <Card.Content>
      <Grid>
        <Grid.Row columns={4}>
          <Grid.Column width={2} />
          <Grid.Column width={4}>
            <p>DATE</p>
            <p>{props.review.reviewCreated.format("L")}</p>
          </Grid.Column>
          <Grid.Column width={4}>
            <ReviewStars stars={props.review.stars} />
          </Grid.Column>
          <Grid.Column width={6}>
            <p>{props.review.id}</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Card.Header>{props.review.title}</Card.Header>
      <Card.Description textAlign="left">
        {props.review.content}
      </Card.Description>
    </Card.Content>
  </Card>
);
