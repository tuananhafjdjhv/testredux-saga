
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ListUser from './components/ListUser';
import NewUser from './components/NewUser';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ListUser/>}/>
      <Route path='/newuser' element={<NewUser/>}></Route>
    </Routes>
  );
}

export default App;
