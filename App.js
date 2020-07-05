import React from 'react';
import {StatusBar} from 'react-native';
import {isTablet} from './src/utilities';

import Tablet from './src/Tablet';
import Phone from './src/Phone';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* need to generate the correct view for the device. Tablets will display the resume
      like it's a piece of A4 paper. Phones will have a nav drawer */}
      {isTablet() ? <Tablet /> : <Phone />}
    </>
  );
}

export default App;
