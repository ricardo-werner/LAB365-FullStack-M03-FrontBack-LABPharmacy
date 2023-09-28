import React from 'react';
import AppRouter from './Router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App
