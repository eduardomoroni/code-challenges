// @flow

import AppHeader from "anchor-ui/app-header";
import Button from "anchor-ui/button";
import IconExit from "anchor-ui/icons/icon-exit";
import colors from "anchor-ui/settings/colors";
import React from "react";

export const Header = () => (
  <AppHeader
    text="Chat App"
    rightButton={
      <Button iconButton>
        <IconExit color={colors.white} />
      </Button>
    }
  />
);
