import { useCallback } from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { User } from '../types';
import { users } from '../helpers/users';
import { useNavigate } from 'react-router-dom';

const useAPI = () => {
  const navigate = useNavigate();

  const getUser = useCallback(
    async (email: string, password: string, remember?: boolean): Promise<User> => {
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

      return new Promise((resolve) => {
        setTimeout(resolve, 2000, { id: nanoid(), email });
        if (users.some(searchUser)) {
          toast('Correct User', { type: 'success', position: 'top-center' });
          navigate('/index');
        } else if (email === '' || password === '') {
          toast('I am incomplete 😢', { type: 'error', position: 'top-center' });
        } else {
          toast('Incorrect data', { type: 'error', position: 'top-center' });
        }
      });
    },
    []
  );

  return {
    getUser
  };
};

export default useAPI;
