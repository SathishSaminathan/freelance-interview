import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import Dashboard from '@pages/dashboard/dashboard-page';
import { DoughnutComponent } from '@sharedComponent/doughnut-chart';
import { Col, Row } from 'antd';

function App() {
	return <Dashboard />;
}

export default withRouter(App);
