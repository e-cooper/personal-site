import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.css';

function Description() {
  return (
    <div className="Description">
      <p className="DescriptionText">
        Hi, I'm currently a remote-based Frontend Engineering Manager.
      </p>

      <div className="IconRow">
        <div className="Icon">
          <FontAwesomeIcon icon='drafting-compass' />
        </div>
        <div className="DashedLine" />
        <div className="Icon">
          <FontAwesomeIcon icon='heart' />
        </div>
        <div className="DashedLine" />
        <div className="Icon">
          <FontAwesomeIcon icon='code' />
        </div>
      </div>

      <p className="DescriptionText">
        I enjoy being a people leader at the crossroads of design and engineering.
      </p>
    </div>
  );
}

export default Description;
