import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { axiosService } from '../..';


const DEFAULT_FEED_URL = process.env.REACT_APP_FEED_URL;

/**
 * Widget Comp that retrieve the feed information for the given feedUrl and display it by the most recent post
 * @param {Config} feedConfig Configuration object for the feed 
 * @param {String} feedConfig.feedUrl The url to request the feed
 * @param {Number} feedConfig.postsOffset The number of posts to display
 * @param {Number} feedConfig.updateInterval How often the feed should refresh the data (Default is set to 50sec)
 */
export const Feed = ({ feedUrl = DEFAULT_FEED_URL, postsOffset = 7, updateInterval = 50000 }) => {
  useEffect(() => {
    console.log('Run effect');
    axiosService.get(feedUrl, {
      params: {
        limit: postsOffset,
      },
    }).then((result) => {
      if (!result.data) return;
      const lastPost = result.data;
      console.log(lastPost);
    })
  }, [feedUrl, postsOffset]);
}

Feed.propTypes = {
  feedUrl: PropTypes.string,
  postsOffset: PropTypes.number,
  updateInterval: PropTypes.number
}