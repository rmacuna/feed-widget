import './App.css';
import { Feed } from './components/feed/Feed';
import PropTypes from 'prop-types';

function App(props) {
  return <Feed {...props} />
}

App.propTypes = {
  feedUrl: PropTypes.string.isRequired,
  postsOffset: PropTypes.number.isRequired,
  updateInterval: PropTypes.number.isRequired
}

export default App;
