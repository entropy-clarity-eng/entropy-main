import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RootStore } from './stores/root-store';
import {Provider, MobXProviderContext} from 'mobx-react';

export function useProviderStore():any{
  return React.useContext(MobXProviderContext);
}

export function useRootStore():RootStore {
  const {rootStore} = useProviderStore();
  return rootStore;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider rootStore={new RootStore()}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();