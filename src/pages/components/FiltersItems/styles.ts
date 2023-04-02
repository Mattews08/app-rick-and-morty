import styled from "styled-components";

const MainColor = '#00B5CC';
const MainColorWithShadow = 'rgba(0, 181, 204, 0.8)';

export const Container = styled.div`
  display: flex;
  background-color: #1edff7;
  gap: 2rem;
  box-shadow: 2px 2px 5px ${MainColorWithShadow};
  border: 4px solid #B2DF28;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const ImageLogo = styled.img`
width: 180px;
`

export const StyledSelect = styled.select`
  border-radius: 5px;
  background-color: #f3f3f3;
  height: 30px;
  border: none;
  padding: 5px;
  font-size: 16px;
`;
