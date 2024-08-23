import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from '../routes'
import { AuthProvider } from '@/src/context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  );
}
