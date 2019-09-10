import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.css';

function Description() {
  return (
    <div className="Description">
      <p className="DescriptionText">
        Hi, I'm a Frontend Engineer currently based in Austin, TX.
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
        My passion lies at the crossroads of intelligent design and adaptive technology.
      </p>
    </div>
  );
}

export default Description;
