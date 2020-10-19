import React from 'react';
const DashboardPresentational = ({ onIncrementClick, counterVal }) => {
	return (
		<div>
			<button onClick={() => onIncrementClick(counterVal)}> Test Button </button>
		</div>
	);
};

export default DashboardPresentational;
