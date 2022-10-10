import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Splash from './components/Splash.js';
import Navbar from './components/Navbar.js';
import Dashboard from './components/Dashboard.js';
import Resources from './components/Resources.js';

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext ((_, {headers}) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


// what dustin had
// function App() {
//   return <Splash />;
// }


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Splash} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/resources' component={Resources} />
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;