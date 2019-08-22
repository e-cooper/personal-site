import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import Name from '../components/presentational/Name';
import Description from '../components/presentational/Description';

import './App.css';

library.add(fab, faEnvelopeSquare);

function App() {
  return (
    <div className="App">
      <Name />
      <Description />
    </div>
  );
}

export default App;
