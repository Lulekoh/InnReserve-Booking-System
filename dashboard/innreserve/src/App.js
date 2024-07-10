// Import statements
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

// Functional component App
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h1>Welcome to InnReserve</h1>
        {/* Add more components or content here */}
      </div>
    </div>
  );
}

export default App;
