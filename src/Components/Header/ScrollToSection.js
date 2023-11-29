import React from 'react';

const ScrollToSection = ({ target }) => {
  const scrollTo = (e) => {
    e.preventDefault();
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a href={`#${target}`} onClick={scrollTo}>
      {target}
    </a>
  );
};

export default ScrollToSection;
