import React, { Component } from 'react';
import { Header } from '../components';
import { Provider } from 'mobx-react';

const Layout = ({ children }) => (
  <div className="mainLayout">
    <Header/>
    {children}
  </div>
);

export default Layout;