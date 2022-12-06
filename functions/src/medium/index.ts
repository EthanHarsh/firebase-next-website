import axios from "axios";
import {parseFeed} from "htmlparser2";
import {writingImages} from "../constants/writingImages";

interface Options {
    recent: boolean
}

interface items {
  id: string,
  link: string,
  pubDate: string,
  title: string,
  image: string
}

interface RssResponse {
  data: items[]
}

interface ErrorResponse {
  error: string
}


export const getRssFeed = async (data: Options): Promise<RssResponse | ErrorResponse> => {
  // Error Messages
  const errorMsg = "Error fetching RSS feed.";

  // Fetch RSS Feed.
  const d = await axios.get("https://ethanharsh.medium.com/feed")
      .catch((err) => {
        console.error("Error fetching medium RSS feed.");
        console.error(err);
      });
  if (!d) {
    return {error: errorMsg};
  }

  // Parse RSS
  const feed = parseFeed(d.data);
  if (!feed) {
    return {error: errorMsg};
  }

  const rssResponse: items[] = [];
  const items = feed.items;
  // Process Response
  const resLen: number = (data as Options).recent ? 3 : items.length;

  for (let i = 0; i < resLen; i++) {
    const item = {...items[i]};
    const fdo: Date = new Date(item.pubDate as Date);
    let image = writingImages[item.title as string];
    (!image) && (image = writingImages["defaultImages"][Math.round(Math.random() * 5)]);
    delete item.pubDate;
    const formattedItem: items = {
      id: item.id as string,
      link: item.link as string,
      title: item.title as string,
      image: image as string,
      pubDate: `${fdo.getMonth()}/${fdo.getDay()}/${fdo.getFullYear()}`,
    };
    rssResponse.push(formattedItem);
  }

  return {data: rssResponse};
};
