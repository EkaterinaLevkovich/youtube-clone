import { YOUTUBE_API_KEY } from '../constants/apiKeys';
import { YOUTUBE_API_URL } from '../constants/urls';
import { YouTubeConverter } from './converter';

class YouTubeApi {
  constructor({ baseUrl, apiKey }) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  async getRecomendedVideos() {
    const response = await fetch(`${this.baseUrl}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=${this.apiKey}`);

    const { items } = await response.json();
    const channelsIds = items.map((channel) => channel.snippet.channelId);
    const responseChannels = await fetch(`${this.baseUrl}/channels?part=snippet&id=${channelsIds.join(',')}&key=${this.apiKey}`);
    const channelId = await responseChannels.json();
    const channelImage = channelId.items.map((item) => ({ channelId: item.id, channelImage: item.snippet.thumbnails.default.url }));
    const itemsWithImage = items.map((y) => Object.assign(y, channelImage.find((x) => x.channelId === y.snippet.channelId)));
    return YouTubeConverter.toVideos(itemsWithImage);
  }

  async getVideos(searchedValue) {
    const response = await fetch(`${this.baseUrl}/search?order=viewCount&type=video&videoDefinition=high&key=${this.apiKey}&q=${searchedValue}&maxResults=20`);

    const { items } = await response.json();

    const videosIds = items.map(({ id: { videoId } }) => videoId);

    // eslint-disable-next-line no-underscore-dangle
    const result = await this._getVideosInfoByIds(videosIds);

    return result;
  }

  // eslint-disable-next-line no-underscore-dangle
  async _getVideosInfoByIds(ids = []) {
    if (!ids.length) {
      return [];
    }

    const idsString = ids.join(',');

    const response = await fetch(`${this.baseUrl}/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${idsString}&key=${this.apiKey}`);

    const { items } = await response.json();
    const channelsIds = items.map((channel) => channel.snippet.channelId);
    const responseChannels = await fetch(`${this.baseUrl}/channels?part=snippet&id=${channelsIds.join(',')}&key=${this.apiKey}`);
    const channelId = await responseChannels.json();
    const channelImage = channelId.items.map((item) => ({ channelId: item.id, channelImage: item.snippet.thumbnails.default.url }));
    const itemsWithImage = items.map((y) => Object.assign(y, channelImage.find((x) => x.channelId === y.snippet.channelId)));

    // eslint-disable-next-line consistent-return
    return YouTubeConverter.toVideos(itemsWithImage);
  }
}

export const YouTubeService = new YouTubeApi({ baseUrl: YOUTUBE_API_URL, apiKey: YOUTUBE_API_KEY });
