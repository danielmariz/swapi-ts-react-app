import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { configureStore } from './store/configureStore';
import { Layout } from './components/Layout';
import { MainRouter } from './config/routes';

import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const store = configureStore(history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <HashRouter>
        <Layout>
          <MainRouter />
        </Layout>
      </HashRouter>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('App'),
);
