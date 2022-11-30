import { useCallback, useState } from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { User } from '../types';
import { users } from '../helpers/users';
import { useNavigate } from 'react-router-dom';

const useAPI = () => {
  const navigate = useNavigate();

  const getUser = useCallback(
    async (email: string, password: string, remember: boolean): Promise<User> => {
      const userAux = {
        email: email,
        password: password
      };

      if (remember) {
        localStorage.setItem('user', JSON.stringify(userAux));
      } else {
        localStorage.removeItem('user');
      }

      const searchUser = (e: any) => e.email === userAux.email && e.password === userAux.password;

      if (users.some(searchUser)) {
        toast('Correct User Welcome', { type: 'success', position: 'top-center' });
        toast('Welcome', { type: 'success', position: 'top-center' });
        navigate('/index');
      } else if (email === '' || password === '') {
        toast('I am incomplete 😢', { type: 'error', position: 'top-center' });
      } else {
        toast('Incorrect data', { type: 'error', position: 'top-center' });
      }

      return new Promise((resolve) => {
        setTimeout(resolve, 2000, { id: nanoid(), email });
      });
    },
    []
  );

  return {
    getUser
  };
};

export default useAPI;
