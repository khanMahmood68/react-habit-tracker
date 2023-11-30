// importing all the required libraries
import { Route, Routes } from 'react-router-dom';
import { ReactNotifications } from 'react-notifications-component';

// importing all required files
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import 'react-notifications-component/dist/theme.css';
import HabitDetails from './components/HabitDetails/HabitDetails';




function App() {
  return (
    <div className="App">
      <ReactNotifications/>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path = '/dashboard' element={<Dashboard/>}/>
        <Route exact path='/habit/:id/detail' element={<HabitDetails/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
