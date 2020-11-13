import React from 'react';
import './App.css';
import CollectThought from './thoughts/collect-thought';
import { AppContainer } from './app-container';
import { AppTopBar } from './app-top-bar';
import { useRootStore } from '.';


function App() {
  
  const {thoughtStore} = useRootStore();

  return (
    <AppContainer>
          <AppTopBar>
       <div className="menu-container">Menu</div>
      <div className="title">Entropy</div>
      <div className="upload-status-container">
       {thoughtStore.currentPersistenceStatus.thoughtsLeftToPersist === 0 && <img className="cloud-icon" src="/icons/upload-complete.png" alt="ok"/>} 
       {thoughtStore.currentPersistenceStatus.thoughtsLeftToPersist > 0 &&  <img className="cloud-icon" src="/icons/upload-in-progress.png" alt="ok"/>}
        </div>
       </AppTopBar>
        <CollectThought />
    </AppContainer>
  );
}

export default App;
