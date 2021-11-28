import { Feed } from "./components/feed/Feed";
import PropTypes from "prop-types";
import { GlobalStyles } from "./globalStyles";

export function App(props) {
  return (
    <>
      <GlobalStyles />
      <Feed {...props} />
    </>
  );
}

App.propTypes = {
  feedUrl: PropTypes.string,
  postsOffset: PropTypes.number,
  updateInterval: PropTypes.number,
};
