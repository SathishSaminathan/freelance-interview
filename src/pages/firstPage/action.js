const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const INCREMENT_COUNTER_COMPLETED = 'INCREMENT_COUNTER_COMPLETED';
const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
const increment = (currentVal) => {
	return {
		type: INCREMENT_COUNTER,
		payload: {
			currentVal,
		},
	};
};

const incrementCompleted = (incrementedVal) => {
	return {
		type: INCREMENT_COUNTER_COMPLETED,
		payload: {
			incrementedVal,
		},
	};
};

const decrement = (currentVal) => {
	return {
		type: DECREMENT_COUNTER,
		payload: {
			currentVal,
		},
	};
};

export default {
	types: {
		INCREMENT_COUNTER,
		DECREMENT_COUNTER,
		INCREMENT_COUNTER_COMPLETED,
	},
	creators: {
		increment,
		decrement,
		incrementCompleted,
	},
};
