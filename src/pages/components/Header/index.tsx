import React from 'react';
import * as C from './styles'

interface HeaderProps {
    title: string;
    items: { label: string; link: string }[];
  }

  const Header = ({ title, items }: HeaderProps) => {
    return (
      <C.HeaderContainer>
        <C.Title>{title}</C.Title>
        <C.Nav>
          {items.map((item, index) => (
            <C.NavItem key={index}>
              <C.NavLink href={item.link}>{item.label}</C.NavLink>
            </C.NavItem>
          ))}
        </C.Nav>
      </C.HeaderContainer>
    );
  };

  export default Header;