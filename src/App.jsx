import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header';
import Profile from './components/profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path="/profile" element={<Profile />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
