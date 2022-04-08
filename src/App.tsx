import { createContext } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';


const TestContext = createContext('');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/rooms/new" element={<NewRoom/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;