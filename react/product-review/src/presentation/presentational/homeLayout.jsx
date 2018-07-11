// @flow strict

import * as React from "react";
import { Grid, Container } from "semantic-ui-react";

type PropTypes = {
  header: React.Node,
  content: React.Node,
};

export const HomeLayout = (props: PropTypes) => (
  <Container>
    <Grid>
      <Grid.Row>
        <Grid.Column>{props.header}</Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>{props.content}</Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);
