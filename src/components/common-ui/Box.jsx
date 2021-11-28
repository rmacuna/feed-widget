import styled from "styled-components";
import PropTypes from "prop-types";

const StyledBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
`;

export const Box = (props) => {
  return <StyledBox {...props}>{props.children}</StyledBox>;
};

Box.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
};

Box.defaultProps = {
  width: "30px",
  height: "30px",
  backgroundColor: "#b9b9b9",
  borderRadius: "30px",
};
