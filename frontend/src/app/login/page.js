'use client'

import userApi from '@/api/UserApi';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { login } = userApi()
      const response = await login({ email, password });
      localStorage.setItem('token', response.data.token);
      console.log(response.data)
      router.push('/home');
    } catch (error) {
      console.error("Error loggin in:", error);
    }
  }
  return (
    <div className="main-div">
      <h1>login page</h1>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="البريد الالكتروني"
          required
          id="email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="كلمة السر"
          required
          id="password"
        />
      </form>
    </div>
  );
}
