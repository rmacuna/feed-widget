import "./App.css";
import { Feed } from "./components/feed/Feed";
import PropTypes from "prop-types";

function App(props) {
  return <Feed {...props} />;
}

App.propTypes = {
  feedUrl: PropTypes.string,
  postsOffset: PropTypes.number,
  updateInterval: PropTypes.number,
};

export default App;
