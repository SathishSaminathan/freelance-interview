import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import DashboardPresentational from '@pages/dashboard/component/dashboard-presentational';
import { DoughnutComponent } from '@sharedComponent/doughnut-chart';
import { Col, Row } from 'antd';

function App() {
	return (
		<Row>
			<Col xl={24}>
				<Col style={{ width: 250, height: 250 }}>
					<DoughnutComponent />
				</Col>
			</Col>
			<Col xl={24}>
				<DashboardPresentational />
			</Col>
		</Row>
	);
}

export default withRouter(App);
