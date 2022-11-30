import { useState } from 'react';

export function Index() {
  const [email, setEmail] = useState(localStorage.getItem('email'));
  const [id, setId] = useState(localStorage.getItem('id'));

  return (
    <>
      <div className="flex flex-col m-10 mt-20">
        <div className="text-white">ID: {id}</div>

        <div className="flex flex-raw">
          <div className="text-base bg-slate-100 w-1/2 h-screen flex justify-center flex-col items-center">
            <div className="text-4xl bg-slate-200 text-center">BIENVENIDO A LA WEB</div>
            <div className="text-4xl bg-slate-200">Usuario: {email}</div>
          </div>

          <div className="w-1/2 bg-vinciImage bg-cover" />
        </div>
      </div>
    </>
  );
}
