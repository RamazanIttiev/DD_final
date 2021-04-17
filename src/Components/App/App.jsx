import React from 'react';
import api from '../../api';
import Header from '../Header/Header';
import Layout from '../Layout/Layout';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Layout />
    </div>
  );
};

export default App;
