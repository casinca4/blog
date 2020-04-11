import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.querySelector('#root')
);

// applyMiddleware: how we connect a middleware like thunk to our read store itself

// Z. 13: war vorher: store={createStore(reducers)}, dafür Z. 10: const store = createStore(reducers);