import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.css';

export const TYPES = {
  EMAIL: 'EMAIL',
  GITHUB: 'GITHUB',
  LINKEDIN: 'LINKEDIN',
};

export const SOCIAL = {
  EMAIL: {
    icon: 'envelope-square',
    link: 'mailto:eli@elicooper.com',
    text: 'Email',
  },
  GITHUB: {
    icon: ['fab', 'github-square'],
    link: 'https://github.com/e-cooper',
    text: 'Github',
  },
  LINKEDIN: {
    icon: ['fab', 'linkedin'],
    link: 'https://linkedin.com/in/coopereli/',
    text: 'LinkedIn',
  },
};

function SocialLink(props) {
  return (
    <a
      className="SocialLink"
      href={SOCIAL[props.type].link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="SocialLinkIcon">
        <FontAwesomeIcon icon={SOCIAL[props.type].icon} />
      </div>
    </a>
  );
}

export default SocialLink;
