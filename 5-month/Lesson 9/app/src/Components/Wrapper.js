import styled from "styled-components";

const Wrapper = styled.div((props) => ({
  textAlign: "center",
  backgroundColor: props.bgcolor,
  height: "100vh",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
}));

export { Wrapper };
