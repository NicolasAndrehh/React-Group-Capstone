import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header';
import Profile from './components/profile';
import Rockets from './components/rockets';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
