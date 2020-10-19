import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Invoices from '@pages/invoices/invoices-page';
import CreateInvoices from '@pages/create-invoices/create-invoices-page';
import Welcome from '@pages/welcome/welcome-page';

const HomeRoutes = () => {
	return (
		<Switch>
			<Route path="/invoices" component={Invoices} />
			<Route path="/create-invoices" component={CreateInvoices} />
			<Route path="/" component={Welcome} />
		</Switch>
	);
};

export { HomeRoutes };
