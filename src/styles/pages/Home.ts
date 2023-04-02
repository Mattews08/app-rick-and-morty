import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("/img/bg.jpg");
  background-size: contain;
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Content = styled.div`
  flex: 1;
  overflow-y: hidden;
  /* padding: 3rem 20rem; */
`;

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden !important;
`;
