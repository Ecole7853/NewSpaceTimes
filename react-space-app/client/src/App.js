import './styles/App.css';
import React from "react";
import FrontPage from "./components/FrontPage";
import Profile from "./pages/Profile";
import SignUp from "./components/SignUp";
import NewsBoard from "./pages/NewsBoard";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Header from './components/Header';
import {BrowserRouter as Router, Route } from 'react-router-dom';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router basename="react-space-app">
        <div>
          <Header />
          <div>
            <Route exact path="/">
              <FrontPage />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/newsboard">
              <NewsBoard />
            </Route>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;