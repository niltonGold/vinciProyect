import { FC, useEffect, useState } from 'react';
import useAPI from '../hooks/useAPI';
import { useNavigate } from 'react-router-dom';

const Login: FC = () => {
  const { getUser } = useAPI();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkbox, setCheckbox] = useState('');
  // const [userLoad, setUserLoad] = useState({});

  useEffect(() => {
    const userLoad = localStorage.getItem('user');

    if (userLoad !== null) {
      let userLoadObj = JSON.parse(userLoad);
      setEmail(userLoadObj.email);
      setPassword(userLoadObj.password);
    }
  }, []);

  return (
    <>
      <div className="flex flex-col m-10 mt-20">
        <div className="text-white">log in</div>

        <div className="flex flex-raw">
          <div className="px-20 py-10 text-base bg-slate-100 w-1/2 h-screen flex justify-center flex-col items-center">
            <div className="w-24 flex flex-raw mb-8">
              <div className="text-4xl">VINCI</div>
              <div className="text-slate-400">BETA</div>
            </div>

            <div className="w-full max-w-xs">
              <form
                onSubmit={async (e: any) => {
                  e.preventDefault();
                  const emailValue = e.target[0].defaultValue;
                  const passwordValue = e.target[1].defaultValue;
                  const rememberValue = e.target[2].checked;
                  const response = await getUser(emailValue, passwordValue, rememberValue);
                }}
              >
                <div className="mb-2">
                  <input
                    type="email"
                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <input
                    type="password"
                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                    placeholder="Enter your password"
                  />
                </div>

                <div className="flex justify-between mb-2">
                  <div>
                    <input
                      className="mr-2"
                      type="checkbox"
                      id="remenber"
                      name="remember"
                      value={checkbox}
                    />
                    <label className="text-sm" htmlFor="remember">
                      Remember me
                    </label>
                  </div>

                  <div>
                    <a className="text-sm" href="">
                      Forgot password
                    </a>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <input
                    className="bg-[#6D3AF9] hover:bg-blue-700 text-white font-bold py-2 w-full rounded-lg focus:outline-none focus:shadow-outline"
                    type="submit"
                    value="Continue"
                  />
                </div>

                <div className="border-t-4 py-3 mt-4 text-center text-[#9A9696]">
                  Don’t have an account?{' '}
                  <a className="underline text-[#0000FF]" href="">
                    Sign up
                  </a>
                </div>
              </form>
            </div>
          </div>

          <div className="w-1/2 bg-vinciImage bg-cover" />
        </div>
      </div>
    </>
  );
};

export default Login;
