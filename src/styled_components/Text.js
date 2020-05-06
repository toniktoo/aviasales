import styled from "styled-components";

export default styled.p`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: 12px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  color: ${(props) => (props.color ? props.color : "#4a4a4a")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "12px")};
`;
