import React from 'react';
import { connect } from 'react-redux';
import Selectors from '../selectors';
import Actions from '../action';
import Presentational from './dashboard-presentational';

const DashboardFunctional = ({ counterVal, onIncrementClick }) => {
	return <Presentational onIncrementClick={onIncrementClick} counterVal={counterVal} />;
};

const mapStateToProps = (state) => {
	return {
		counterVal: Selectors.counterVal(state),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onIncrementClick: (currentVal) => dispatch(Actions.creators.increment(currentVal)),
	};
};

const Connected = connect(mapStateToProps, mapDispatchToProps)(DashboardFunctional);

export default Connected;
