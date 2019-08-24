import React from 'react';
import SocialLink, { TYPES } from '../SocialLink';

import './index.css';

function Description() {
  return (
    <div className="Description">
      <div className="SocialLinkBox">
        <SocialLink type={TYPES.LINKEDIN} />
        <SocialLink type={TYPES.GITHUB} />
        <SocialLink type={TYPES.EMAIL} />
      </div>
    </div>
  );
}

export default Description;
