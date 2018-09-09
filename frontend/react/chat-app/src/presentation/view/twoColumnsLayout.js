// @flow

import * as React from "react";
import { Container, Grid } from "semantic-ui-react";

type PropsType = {
  left: React.Node,
  right: React.Node,
};

export const TwoColumnsLayout = (props: PropsType) => (
  <Container>
    <Grid celled padded className="home-layout-container">
      <Grid.Row columns={2}>
        <Grid.Column width={6}>{props.left}</Grid.Column>
        <Grid.Column width={10}>{props.right}</Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);
