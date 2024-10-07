import React from 'react';
import './MyFooter.css'


const MyFooter = () => (
  <footer className="footer">
    <span className="text-white m-auto p-2">
      <strong>EPICODE</strong> - Copyright {new Date().getFullYear()}
    </span>
  </footer>
)

export default MyFooter
