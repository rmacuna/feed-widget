import PropTypes from "prop-types";

export const Post = ({ createdAt, author, messageBody }) => {
  return (
    <div>
      <h2>{author}</h2>
      <p>{messageBody}</p>
      time: {new Date(createdAt).toLocaleString()}
    </div>
  );
};

Post.propTypes = {
  createdAt: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  messageBody: PropTypes.string.isRequired,
};
