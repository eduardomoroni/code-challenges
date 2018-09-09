// @flow strict

import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { Grid, Container, Header, Segment } from "semantic-ui-react";
import { Review } from "../../domain/entity/review";
import { ReviewComponent } from "./reviewComponent";

type PropTypes = {
  reviewsGrouped: { [string]: Array<Review> },
  onEndReached: () => void,
  hasMore: boolean,
};

const Loader = (
  <div className="loader" key={0}>
    Loading ...
  </div>
);

export class ReviewsList extends Component<PropTypes> {
  renderReviewRow = (review: Review) => (
    <Grid.Row key={review.id}>
      <ReviewComponent review={review} />
    </Grid.Row>
  );

  renderGroup = (group: string) => {
    const reviews = this.props.reviewsGrouped[group];

    return (
      <Grid padded key={group}>
        <Grid.Row key="title">
          <Container>
            <Header as="h2">{group}</Header>
            {reviews.map(this.renderReviewRow)}
          </Container>
        </Grid.Row>
      </Grid>
    );
  };

  render() {
    return (
      <Segment className="review-list-container">
        <InfiniteScroll
          loader={Loader}
          useWindow={false}
          hasMore={this.props.hasMore}
          loadMore={this.props.onEndReached}
        >
          {Object.keys(this.props.reviewsGrouped).map(this.renderGroup)}
        </InfiniteScroll>
      </Segment>
    );
  }
}
