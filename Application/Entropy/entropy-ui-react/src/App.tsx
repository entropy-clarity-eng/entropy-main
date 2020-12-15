import React from 'react';
import './App.css';
import CollectThought from './thoughts/collect-thought';
import { AppContainer } from './app-container';
import { AppTopBar } from './app-top-bar';
import { useRootStore } from '.';
import { observer } from "mobx-react-lite";

import { CSSTransition } from 'react-transition-group';


const App = observer(() => {
  
const {thoughtStore} = useRootStore();
const nodeRef = React.useRef(null);

  
  return (
    <AppContainer>
          <AppTopBar> 
       <div className="top-bar-item">Menu</div> {/*TO-DO: Use this as the container that makes sure all of it's compaonents are nicely spread out.  */}
      <div className="top-bar-item title">Entropy</div>
      <div className="top-bar-item"> 
        <div className="icon">
        <img className = "cloud-base" src="/icons/cloud-base.png" alt="upload" />
        <CSSTransition nodeRef={nodeRef} in={thoughtStore.currentPersistenceStatus.thoughtsLeftToPersist === 0} timeout={2000} classNames="cloud-icon-upload-complete">
          <div ref={nodeRef}>
              <img className="cloud-icon" src="/icons/upload-completed.png" alt="ok"/>
          </div>
   
    </CSSTransition> 
       {thoughtStore.currentPersistenceStatus.thoughtsLeftToPersist > 0 &&  <img className="cloud-icon" src="/icons/upload-in-progress.png" alt="uploading"/>}
       </div>
        </div>
       </AppTopBar>
        <CollectThought />
    </AppContainer>
  );
}); 

export default App;
