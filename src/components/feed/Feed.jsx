import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { axiosService } from "../..";

const DEFAULT_FEED_URL = process.env.REACT_APP_FEED_URL;

/**
 * Widget Comp that retrieve the feed information for the given feedUrl and display it by the most recent post
 * @param {Config} feedConfig Configuration object for the feed
 * @param {String} feedConfig.feedUrl The url to request the feed
 * @param {Number} feedConfig.postsOffset The number of posts to display
 * @param {Number} feedConfig.updateInterval How often the feed should refresh the data (Default is set to 50sec)
 */
export const Feed = ({
  feedUrl = DEFAULT_FEED_URL,
  postsOffset = 7,
  updateInterval = 50000,
}) => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    axiosService
      .get(feedUrl, {
        params: {
          limit: postsOffset,
        },
      })
      .then((result) => {
        if (!result.data) return;
        const feed = result.data;
        setFeed(feed);
      });
  }, [feedUrl, postsOffset]);

  return (
    <div>
      <h1>Feed of: {feedUrl}</h1>

      {feed.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.text}</p>
          time: {new Date(post.created_at).toLocaleString()}
        </div>
      ))}
    </div>
  );
};

Feed.propTypes = {
  feedUrl: PropTypes.string,
  postsOffset: PropTypes.number,
  updateInterval: PropTypes.number,
};
