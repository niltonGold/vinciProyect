import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Login from './Login';
import { Index } from '../components/Index';
import { ForgotPassword } from './ForgotPassword';
import SignUp from './SignUp';
export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />

        <Route path="/index" element={<Index />} />

        <Route path="/ForgotPassword" element={<ForgotPassword />} />

        <Route path="/SignUp" element={<SignUp />} />
      </Routes>

      <ToastContainer style={{ fontSize: '16px' }} theme="dark" position="bottom-right" />
    </>
  );
}
