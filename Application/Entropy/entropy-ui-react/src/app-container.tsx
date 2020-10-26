import {observer} from "mobx-react-lite";
import React from 'react';
import { AppTopBar } from './app-top-bar';

const AppContainer = observer(props => {
    
    ////TO-DO: Import an svg. 
    return (<React.Fragment>
       <AppTopBar>
       <div className="menu-container">Menu</div>
       <div className="title">App Top Bar is live</div>
       <div className="upload-status-container">Upload Status</div>
       </AppTopBar>
        {props.children}
    </React.Fragment>);
});

export default AppContainer;