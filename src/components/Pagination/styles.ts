import { PaginationNumberProps } from "@/types";
import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 3rem;
`;

export const PaginationNumber = styled.div<PaginationNumberProps>`
  background-color: ${(props) => (props.current ? "#00B5CC" : "transparent")};
  border: 2px solid ${(props) => (props.current ? "#B2DF28" : "transparent")};
  height: 40px;
  width: 40px;
  color: #FFFFFF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;


  button {
    background: transparent;
  }

  &:hover {
    background-color: #444;
    color: #FFFFFF;
  }

  &:active {
    background-color: #555;
  }
`;

export const NumberWrapper = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

export const PagenationButton = styled.button`
  background: transparent;
  border-radius: 8px;
  padding: 10px;
  border: none;
  height: 40px;
  width: 40px;
  color: #FFFFFF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #00B5CC;
    color: #FFFFFF;
  }
  
  svg {
    font-size: 20px !important;
  }

  &:active {
    background-color: #555;
  }
`;
