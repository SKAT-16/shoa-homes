import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-300 py-4 text-center">
      <p>{new Date().getFullYear()} Your Website Name. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
