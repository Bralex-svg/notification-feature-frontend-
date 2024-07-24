import React, { useEffect, useState } from 'react';
import { messaging } from './firebase-config';

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    useEffect(() => {
      const getToken = async () => {
        try {
          await messaging.requestPermission();
          console.log('Notification permission granted.');
          const token = await messaging.getToken();
          console.log('FCM Token:', token);
          localStorage.setItem('fcm_token', token);
        } catch (err) {
          console.error('Unable to get permission to notify.', err);
        }
      };
    
      getToken()
    }, []);
    

    const handleLogin = async () => {
        const token = localStorage.getItem('fcm_token');

        try {
            const response = await fetch('http://localhost:5000/client/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                    browser_token: token
                }),
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Login success:', data);
            } else {
                console.error('Login error:', data);
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const handleSignup = async () => {
        const token = localStorage.getItem('fcm_token');

        try {
            const response = await fetch('http://localhost:5000/client/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                    browser_token: token
                }),
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Signup success:', data);
            } else {
                console.error('Signup error:', data);
            }
        } catch (error) {
            console.error('Signup error:', error);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button onClick={handleLogin}>Login</button>

            <h1>Signup</h1>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button onClick={handleSignup}>Signup</button>
        </div>
    );
}

export default App;
