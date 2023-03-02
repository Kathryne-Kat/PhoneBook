import React, { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Layout } from 'layout/Layout';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import HomePage from 'pages/HomePage/HomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/user/operations';

// const LazyHomePage = lazy(() => import('pages/HomePage/HomePage.jsx'));
// const LazyRegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage.jsx'));
// const LazyLoginPage = lazy(() => import('pages/LoginPage/LoginPage.jsx'));
// const LazyContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="*" element={<Navigate to={'/'} />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
