import { Video } from '../../entities/video';

class Converter {
  toVideos(videoItemsInfo) {
    return videoItemsInfo.map((itemInfo) => this.toVideo(itemInfo));
  }

  toVideo({
    id, snippet, statistics, channelImage,
  }) {
    const channelInfo = {
      id: snippet.channelId,
      title: snippet.channelTitle,
      channelImage,
      // TODO: get solution for isVerification
      isVerification: false,
    };

    return new Video({
      id,
      title: snippet.title,
      views: statistics.viewCount,
      isLive: snippet.liveBroadcastContent === 'none',
      imageUrl: snippet.thumbnails.medium.url,
      timestamp: new Date(snippet.publishedAt).toLocaleTimeString('en', {
        year: 'numeric', month: 'short', day: '2-digit', hour12: false,
      }).slice(0, 12),
      channelInfo,
    });
  }
}

export const YouTubeConverter = new Converter();
