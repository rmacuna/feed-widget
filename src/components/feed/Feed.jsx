import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { axiosService } from "../..";
import { Post } from "../post/Post";
import {
  FeedBackground,
  FeedContainer,
  FeedErrorContainer,
  FeedGrid,
  FeedScrollContainer,
  FeedSkeleton,
  FeedTitle,
} from "./Feed.styles";
import { Box } from "../common-ui/Box";

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
  postsOffset = 15,
  updateInterval = 15000,
}) => {
  const [feed, setFeed] = useState([]);
  const [lastMostRecent, setLastMostRecent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const interval = useRef(null); // In case you want to add a cancel button to the component

  /**
   * Initialize the feed with an old postId. The API will not load anymore new feeds since the last post
   * is from two years before. The only way to get "new posts" is to load from a specific point in the past of
   * the feed.
   */
  useEffect(() => {
    async function intialOldFeed() {
      try {
        setIsLoading(true);
        const response = await axiosService.get(feedUrl, {
          params: { limit: postsOffset, from_id: "twitter:946553740861026309" },
        });
        setFeed(response.data);
        setLastMostRecent(response.data[0]?.entity_id);
      } catch (error) {
        setError("Error while loading the feed, please try again");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    intialOldFeed();
  }, [feedUrl, postsOffset]);

  useEffect(() => {
    async function fetchFeed() {
      try {
        setIsLoading(true);
        const response = await axiosService.get(feedUrl, {
          params: { limit: postsOffset, from_id: lastMostRecent },
        });
        if (response.data.length > 0) {
          setFeed(response.data);
          setLastMostRecent(response.data[0].entity_id);
        }
      } catch (error) {
        setError("Error while loading the feed, please try again");
      } finally {
        setIsLoading(false);
      }
    }
    interval.current = setInterval(() => {
      fetchFeed();
    }, updateInterval);

    return () => clearInterval(interval.current);
  }, [feedUrl, postsOffset, updateInterval, lastMostRecent]);

  const renderFeed = () => {
    if (isLoading) {
      return new Array(postsOffset).fill(0).map((_, index) => (
        <Box width="100%" height="230px" key={index}>
          <FeedSkeleton borderRadius="20px" />
        </Box>
      ));
    }
    if (error) {
      <FeedErrorContainer>
        <FeedTitle>{error}</FeedTitle>
      </FeedErrorContainer>;
    }

    if (feed.length === 0)
      return (
        <Box width="100%" height="100%">
          <p>No more news to show</p>
        </Box>
      );

    return feed.map(({ id, user, created_at, text }) => (
      <Post
        key={id}
        author={user.name}
        createdAt={created_at}
        messageBody={text}
      />
    ));
  };

  return (
    <FeedContainer>
      <FeedBackground />
      <FeedTitle>What people is talking about</FeedTitle>
      <FeedScrollContainer>
        <FeedGrid role="list">{renderFeed()}</FeedGrid>
      </FeedScrollContainer>
    </FeedContainer>
  );
};

Feed.propTypes = {
  feedUrl: PropTypes.string,
  postsOffset: PropTypes.number,
  updateInterval: PropTypes.number,
};
