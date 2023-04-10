/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Header from './components/header';
import Profile from './components/profile';
import Rockets from './components/rockets';
import Missions from './components/missions';
import getRockets from './Redux/Rockets/actions';

function App() {
  const dispatch = useDispatch();

  // Fecth Rockets once
  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <div className="App">
      <BrowserRouter>

        <Header />

        <main>
          <Routes>
            <Route index element={<Rockets />} />
            <Route path="/" element={<Rockets />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>

      </BrowserRouter>
    </div>
  );
}

export default App;
