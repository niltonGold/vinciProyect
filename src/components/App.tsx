import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Login from './Login';
import { Index } from '../components/Index';

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />

        <Route path="/index" element={<Index />} />
      </Routes>

      <ToastContainer style={{ fontSize: '16px' }} theme="dark" position="bottom-right" />
    </>
  );
}
