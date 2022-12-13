import React from 'react';
import Animal from './component/Animal';
import Color from './component/Color';
import Count from './component/Count';

const App = () => {
  return (
    <div>
      <Color />
      <hr/>
      <Count />
      <hr />
      <Animal />
    </div>
  );
};

export default App;
