import React from 'react';
import './App.css';
import CollectThought from './thoughts/collect-thought';
import { AppContainer } from './app-container';
import { AppTopBar } from './app-top-bar';


function App() {
  return (
    <AppContainer>
          <AppTopBar>
       <div className="menu-container">Menu</div>
     <div className="title">Entropy</div>
      <div className="upload-status-container">Upload Status</div>
       </AppTopBar>
        <CollectThought />
    </AppContainer>
  );
}

export default App;
