export class Channel {
  constructor({
    id, title, channelImage, isVerification,
  }) {
    this.id = id;
    this.title = title;
    this.channelImage = channelImage;
    this.isVerification = isVerification;
  }
}
