import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import authService from '../services/authService';
import Cookies from 'js-cookie';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setLoading(true);
      authService
        .fetchUser(token)
        .then((userData) => setUser(userData))
        .catch(console.error)
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogin = async (credentials) => {
    setLoading(true);
    try {
      const token = await authService.login(credentials);
      const userData = await authService.fetchUser(token);

      if (userData && userData.roles) {
        Cookies.set('userRole', userData.roles[0], { expires: 1 });
      }

      setUser(userData);
      router.push('/');
      router.refresh();
    } catch (error) {
      console.error('Erro no login:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    Cookies.remove('userRole');
    router.push('/');
    router.refresh();
  };

  return (
    <AuthContext.Provider value={{ user, onLogin: handleLogin, onLogout: handleLogout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
