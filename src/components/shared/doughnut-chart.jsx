import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export const DoughnutComponent = ({
	data = {
		labels: ['Mutual Funds', 'ETFs'],
		datasets: [
			{
				data: [90, 10],
				backgroundColor: ['#FF6384', '#36A2EB'],
				hoverBackgroundColor: ['#FF6384', '#36A2EB'],
			},
		],
	},
}) => (
	<Doughnut
		data={data}
		options={{
			cutoutPercentage: 70,
			legend: {
				position: 'right',
			},
		}}
	/>
);
