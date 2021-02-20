
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer'
import Signup from './pages/SignupForm';
import Landing from './pages/Landing';
//import Login from './pages/LoginForm';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },

  uri: '/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Switch>    
          <Route exact path='/signup' component={Signup} />
          
          <Route exact path='/' component={Landing} />  
        </Switch>
      </Router>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
