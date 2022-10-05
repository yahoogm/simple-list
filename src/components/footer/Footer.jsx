import React from 'react';

const Footer = ({ length }) => {
  return (
    <footer className="absolute bottom-0 bg-green-300 w-full p-3 text-center font-semibold text-orange-600">
      {length} {length === 1 ? 'List item' : 'List items'}
    </footer>
  );
};

export default Footer;
