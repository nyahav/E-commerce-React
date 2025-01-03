import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';  // Import necessary components
import HomePage from './pages/homepage/homepage.component';


const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

const AppRoutes = () => {
  const routes = [
    { path: '/', element: <HomePage /> },
    { path: '/hats', element: <HatsPage /> },
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
