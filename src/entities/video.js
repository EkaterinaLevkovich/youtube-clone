import { Channel } from './channel';

export class Video {
  constructor({
    id, title, views, isLive, imageUrl, timestamp, channelInfo,
  }) {
    this.id = id;
    this.title = title;
    this.views = views;
    this.isLive = isLive;
    this.imageUrl = imageUrl;
    this.timestamp = timestamp;
    this.channel = new Channel(channelInfo);
  }
}
