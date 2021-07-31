import './styles/App.css';
import React, { useState } from "react";
import FrontPage from "./components/FrontPage";
import Profile from "../src/pages/Profile";
import SignUp from "./components/SignUp";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

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

  const [currentPage, setCurrentPage] = useState('Home');

  //    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'Home') {
        return <FrontPage pageChanger = {pageChanger}/>;
      }
      if (currentPage === 'SignUp'){
        return <SignUp/>
      }
    };
  
  const pageChanger = (page) => setCurrentPage(page);
  
    return (
      <ApolloProvider client={client}>
      <div>
        {renderPage()}
      </div>
      </ApolloProvider>
    );
}

export default App;