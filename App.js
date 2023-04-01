import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {STORE, PERSISTOR} from './src/store/storeConfig';
import {Route} from './src/routes';

const App = () => {
  return (
    <Provider store={STORE}>
      <PersistGate persistor={PERSISTOR}>
        <Route />
      </PersistGate>
    </Provider>
  );
};

export default App;
