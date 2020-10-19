import React from 'react';
import DashboardFunctional from './component/dashboard-functional';
import { withReducer } from '@store/reducerLoader';
import reducer from './reducer';
import sagas from './sagas';

const DashboardPage = () => {
	return (
		<div>
			<DashboardFunctional />
		</div>
	);
};
const ReducedScreen = withReducer('counter', reducer, sagas)(DashboardPage);
export default ReducedScreen;
