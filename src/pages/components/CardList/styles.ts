import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;

  }
`;

export const ContentList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }

  @media screen and (max-width: 767px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 7rem;
    & > *:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;

