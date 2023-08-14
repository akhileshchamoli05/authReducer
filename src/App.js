import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import React, { useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExpenseForm from './ExpenseForm/ExpenseForm';
import LoginForm from './LoginForm/LoginForm';

import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment>
         <Router>
       <Routes>
       <Route
          path="/products" element={loggedIn ? <ExpenseForm /> : <LoginForm onLogin={() => setLoggedIn(true)} />}
        />
    </Routes>
    </Router>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
