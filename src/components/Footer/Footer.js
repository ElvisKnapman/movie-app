import React from 'react';

import { IoLogoGithub as GithubIcon } from 'react-icons/io';

const Footer = () => {
  return (
    <div className="footer_container">
      <p>&copy;{new Date().getFullYear()} Elvis Knapman</p>
      <div className="social_container">
        <span>View project on </span>
        <span>
          <GithubIcon className="social_icon " />
        </span>
      </div>
    </div>
  );
};

export default Footer;
