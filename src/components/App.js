import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare, faHeart, faDraftingCompass, faCode } from '@fortawesome/free-solid-svg-icons'
import Name from '../components/presentational/Name';
import Description from '../components/presentational/Description';
import SocialLink, { TYPES } from '../components/presentational/SocialLink';

import './App.css';

library.add(fab, faEnvelopeSquare, faHeart, faDraftingCompass, faCode);

function App() {
  return (
    <div className="App">
      <Name />
      <Description />

      <div className="SocialLinkBox">
        <SocialLink type={TYPES.LINKEDIN} />
        <SocialLink type={TYPES.GITHUB} />
        <SocialLink type={TYPES.EMAIL} />
      </div>
    </div>
  );
}

export default App;
