import React from 'react';
import './App.css';
import NotificationSystem from './components/NotificationSystem';
import NotificationsList from './components/NotificationsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Notification System</h1>
      </header>
      <NotificationSystem />
      <NotificationsList />
    </div>
  );
}

export default App;
