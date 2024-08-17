import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Gideon Kipruto" age={25} bio="I am learning React." />
      <Counter />
    </div>
  );
}

export default App;
