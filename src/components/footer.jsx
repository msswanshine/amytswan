import React from 'react';

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      {`©${currentYear} Amy T. Swan `}
    </footer>
  );
}

export default Footer;
