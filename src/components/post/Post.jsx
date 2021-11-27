import PropTypes from 'prop-types';

export const Post = ({ createdAt, author, messageBody }) => {
  return <div>Post with {createdAt} {author} {messageBody}</div>
}

Post.propTypes = {
  createdAt: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  messageBody: PropTypes.string.isRequired  
}