import React from 'react';
import FunctionalComp from './component/dashboard-functional';
import { withReducer } from '@store/reducerLoader';
import reducer from './reducer';
import sagas from './sagas';

const FirstPage = () => {
	return (
		<div>
			<FunctionalComp />
		</div>
	);
};
const ReducedScreen = withReducer('counter', reducer, sagas)(FirstPage);
export default ReducedScreen;
