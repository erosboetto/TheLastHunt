import React from 'react';
import './MyFooter.css'


const MyFooter = () => (
  <footer className="footer">
    <span className="text-white m-auto p-2">
      <strong>Eros Boetto EPICODE</strong> - Capstone Project
    </span>
    <ul className='footer-link'>
      <li>
        <a href='https://www.linkedin.com/in/eros-boetto-961276329/' target="_blank">linkedin</a>
      </li>
      <li>
        <a href='https://github.com/erosboetto?tab=repositories' target="_blank">GitHub</a>
      </li>
    </ul>
  </footer>
)

export default MyFooter
