import './App.css';
import { Navbar } from './components/Navbar';
import { ProfileProvider } from './context/ProfileContext';
import { RoutePages } from './routes/RoutePages';


function App() {
  return (
    <div>
      <ProfileProvider>
        <Navbar/>
        <RoutePages/>
      </ProfileProvider>
    </div>
  );
}

export default App;
