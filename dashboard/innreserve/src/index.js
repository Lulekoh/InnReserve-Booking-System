import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
javascript
Copy code
// App.js
import React from 'react';

function App() {
  return (
    <div className="container">
      <h1>Welcome to InnReserve</h1>
      {/* Add your components here */}
    </div>
  );
}

export default App;
