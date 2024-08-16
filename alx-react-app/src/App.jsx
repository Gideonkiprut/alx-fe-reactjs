import React from 'react';
import UserProfile from './UserProfile'; // Adjust the path if the file is in a different folder

function App() {
  return (
    <div>
      <h1>Welcome to My React App!</h1>
      <UserProfile name="Gideon Kipruto" age={yourAge} bio="I am a developer learning React." />
    </div>
  );
}

export default App;
