import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home, Form, Login, Profile, Contacts  } from './pages'
import { AuthProvider } from "./components/AuthContext";
import AuthGuard from './components/AuthGuard';
import { ROUTES } from './routes';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME.path} element={<AuthGuard><Home /></AuthGuard>} />
          <Route path={ROUTES.LOGIN.path} element={<Login />} />
          <Route path={ROUTES.FORM.path} element={<AuthGuard><Form /></AuthGuard>} />
          <Route path={ROUTES.PROFILE.path} element={<AuthGuard><Profile /></AuthGuard>} />
          <Route path={ROUTES.CONTACTS.path} element={<AuthGuard><Contacts /></AuthGuard>} />
          <Route path={ROUTES.ERROR_404.path} element={<div><h1>Not found</h1></div>} />
          <Route path="*" element={<Navigate to={ROUTES.ERROR_404.path} replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;