import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';  // Import necessary components
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, handleRedirectResult } from './firebase/firebase.utils';


const AppRoutes = () => {
  const routes = [
    { path: '/', element: <HomePage /> },
    { path: '/shop', element: <ShopPage /> },
    { path: '/signin', element: <SignInAndSignUpPage /> },
  ];

  // useRoutes() returns the routes based on the array provided
  return useRoutes(routes);
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // Check for redirect result
    handleRedirectResult()
      .then((result) => {
        if (result && result.user) {
          console.log('Redirect Sign-In Successful: ', result.user);
          this.setState({ currentUser: result.user });
        }
      })
      .catch((error) => {
        console.error('Error handling redirect result:', error);
      });

    // Listen for auth state changes
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      console.log('Auth State Changed: ', user);
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
  return (
    <BrowserRouter>  {/* Wrap routes in <BrowserRouter> */}
       <Header currentUser={this.state.currentUser} />
      <AppRoutes />  {/* Call your routes */}
    </BrowserRouter>
  );
};
}
export default App;
