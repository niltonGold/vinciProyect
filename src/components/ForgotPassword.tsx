import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export function ForgotPassword() {
  const navigate = useNavigate();

  const [emailSend, setEmailSend] = useState('');

  return (
    <>
      <div className="flex flex-col m-10 mt-20">
        <div className="text-white">Forgot Password</div>
        <div className="flex flex-raw">
          <div className="text-base bg-slate-100 w-1/2 h-screen flex justify-center flex-col items-center">
            <form
              onSubmit={async (e: any) => {
                e.preventDefault();

                toast('Check your Email to recover your password', {
                  type: 'success',
                  position: 'top-center'
                });
                navigate('/');
              }}
            >
              <div className="mb-2">
                <div className="mb-4">Enter your mail to reset your password</div>
                <input
                  type="email"
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => {
                    setEmailSend(e.target.value);
                  }}
                  value={emailSend}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <input
                  className="bg-[#6D3AF9] hover:bg-blue-700 text-white font-bold py-2 w-full rounded-lg focus:outline-none focus:shadow-outline"
                  type="submit"
                  value="Continue"
                />
              </div>
              <div className="border-t-4 py-3 mt-4 text-center text-[#9A9696]">
                <a className="underline text-[#0000FF]" href="/">
                  Cancel
                </a>
              </div>
            </form>
          </div>

          <div className="w-1/2 bg-vinciImage bg-cover" />
        </div>
      </div>
    </>
  );
}
