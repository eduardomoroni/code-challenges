// @flow

import List from "anchor-ui/list";
import ListItem from "anchor-ui/list-item";
import React from "react";
import AvatarPlaceholder from "../assets/images/user-avatar.png";
import { RecentChatItemModel } from "../model/recentChatItemModel";

type PropsTypes = {
  onClick: Function,
  items: Array<RecentChatItemModel>,
};

export const ChatList = ({ items, onClick }: PropsTypes) => (
  <List header="Recent Chats">
    {items.map((item, index) => (
      <ListItem
        key={index}
        primaryText={item.requester}
        avatar={item.image || AvatarPlaceholder}
        onClick={() => onClick(item.requester)}
      />
    ))}
  </List>
);
