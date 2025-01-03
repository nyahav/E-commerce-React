import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';  // Import necessary components
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';



const AppRoutes = () => {
  const routes = [
    { path: '/', element: <HomePage /> },
    { path: '/shop', element: <ShopPage /> },
  ];

  // useRoutes() returns the routes based on the array provided
  return useRoutes(routes);
};

const App = () => {
  return (
    <BrowserRouter>  {/* Wrap routes in <BrowserRouter> */}
      <AppRoutes />  {/* Call your routes */}
    </BrowserRouter>
  );
};

export default App;
