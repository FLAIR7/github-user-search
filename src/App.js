import { useState } from 'react';
import './App.css';
import { Header } from './components/Navbar';
import { ProfileProvider, useProfile } from './context/ProfileContext';
import { RoutePages } from './routes/RoutePages';


function App() {

  

  return (
    <div>
      <ProfileProvider>
        <Header/>
        <RoutePages/>
      </ProfileProvider>
    </div>
  );
}

export default App;
