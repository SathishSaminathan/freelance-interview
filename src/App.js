import React from 'react';
import './App.css';

import MainLayout from './pages/main-layout/main-layout-page';
import { withRouter } from 'react-router-dom';

function App() {
	return <MainLayout />;
}

export default withRouter(App);
