import React from 'react';
import ReactDOM from 'react-dom';
import Invitation from './components/Invitation';
import ThemedParty from './components/ThemedParty';
import './index.css';

ReactDOM.render(
  <div>
    <Invitation>Hey, you should totally come to this awesome party Im throwing!</Invitation>
    <ThemedParty theme="heaven">
          <p>A decoration</p>
          <p>Some other decoration</p>
          <p>A last decoration</p>
    </ThemedParty>
  </div>,

  document.getElementById('root')
);