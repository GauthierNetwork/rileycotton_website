import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './pages/Shop';
import Home from './pages/Home';
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
