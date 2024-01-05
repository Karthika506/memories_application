import React from 'react';
import { Container} from '@material-ui/core';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { BrowserRouter, Route, Routes} from 'react-router-dom';




import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { Auth } from './components/Auth/Auth';


const App = () => {
  
  return (
    <GoogleOAuthProvider clientId='439072418097-c6fmkgigi089kh3bs1u7h396ejubqs8d.apps.googleusercontent.com'>
      <BrowserRouter>
        <Container maxWidth="lg">
          <Navbar />
          <Routes>
            <Route path='/' exact Component={Home} />
            <Route path='/auth' exact Component={Auth} />
          </Routes>
        </Container>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
