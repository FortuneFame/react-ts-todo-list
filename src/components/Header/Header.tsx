import React, { useEffect, useState } from 'react';
import navLinks from '../../constantsPages/constantsPages';
import { useLocation } from 'react-router-dom';

interface NavLink {
  linkTo: string;
  name: string;
}

const Header: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user') || '{}');
    const todosLink = navLinks.find((link: NavLink) => link.name === 'Todos');
    if (todosLink) {
      todosLink.linkTo = savedUser && savedUser.id ? '/todos' : '/start';
    }
  }, []);

  useEffect(() => {
    const path = location.pathname;
    const activeLink = navLinks.find((link: NavLink) => link.linkTo === path);
    const index = activeLink ? navLinks.indexOf(activeLink) : -1;
    setActiveIndex(index);
  }, [location]);

  return (
    <header>
      <div>
        {navLinks.map((link: NavLink, index: number) => (
          <a
            key={index}
            href={link.linkTo}
            className={activeIndex === index ? "active nav-link" : "nav-link"}
            style={activeIndex === index ? { borderBottom: "2px solid white" } : undefined}
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
}

export default Header;
