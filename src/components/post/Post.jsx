import PropTypes from "prop-types";
import { Card, CardContent, CardTimestamp, CardTitle } from "./Post.styles";

export const Post = ({ createdAt, author, messageBody }) => {
  return (
    <Card>
      <CardTitle>{author}</CardTitle>
      <CardTimestamp>{new Date(createdAt).toLocaleString()}</CardTimestamp>
      <CardContent>{messageBody}</CardContent>
    </Card>
  );
};

Post.propTypes = {
  createdAt: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  messageBody: PropTypes.string.isRequired,
};
