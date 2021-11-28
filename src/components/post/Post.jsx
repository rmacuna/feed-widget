import PropTypes from "prop-types";
import { Card, CardContent, CardTimestamp, CardTitle } from "./Post.styles";
import { formatDate } from "../common-utils/helpers";
import ReactLinkify from "react-linkify";

export const Post = ({ createdAt, author, messageBody }) => {
  return (
    <Card role="listitem">
      <CardTitle>{author}</CardTitle>
      <CardTimestamp>{formatDate(createdAt)}</CardTimestamp>
      <CardContent>
        <ReactLinkify>{messageBody}</ReactLinkify>
      </CardContent>
    </Card>
  );
};

Post.propTypes = {
  createdAt: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  messageBody: PropTypes.string.isRequired,
};
