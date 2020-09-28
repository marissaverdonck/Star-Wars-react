import React from 'react';
import Home from './components/Home';
import Detail from './components/Detail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound';

import GlobalStyle from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './components/ThemeStyle';
import APIProvider from './components/APIProvider';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <APIProvider>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/:type/:id' exact component={Detail} />
            <Route path='/' component={NotFound} />
          </Switch>
        </APIProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
