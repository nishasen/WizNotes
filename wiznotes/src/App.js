import "./App.css";
import MockAPI from './Mockman/Mockman';
import { Routes, Route } from 'react-router-dom';
import { LandingPage, Login, Signup, Notes, Archive, Trash } from './Pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/mockman" element={<MockAPI/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/trash" element={<Trash />} />
      </Routes>
    </div>
  );
}

export default App;
