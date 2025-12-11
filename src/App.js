import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
      <Routes>
        <Route path="/admin" element={<AdminDashboard /> } />
      </Routes>
  );
}

export default App;
