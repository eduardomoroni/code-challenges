// @flow

export class RecentChatItemModel {
  requester: string;
  image: ?string;

  constructor(requester: string, image: ?string) {
    this.requester = requester;
    this.image = image;
  }
}
