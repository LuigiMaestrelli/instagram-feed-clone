import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';
// import { Container } from './styles';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      <Routes />
    </>
  );
}
