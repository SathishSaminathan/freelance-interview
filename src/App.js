import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import DashboardPresentational from '@pages/dashboard/component/dashboard-presentational';

function App() {
	return <DashboardPresentational />;
}

export default withRouter(App);
