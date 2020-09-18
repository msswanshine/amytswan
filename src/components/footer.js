import React from 'react';

let currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer>
      {`©${currentYear} Amy T. Swan `}
    </footer>
  )
}
