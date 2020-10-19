import React from 'react';
import { Row, Col } from 'antd';

import ContentHeader from '@sharedComponent/content-header';
import Card from '@sharedComponent/card';

const InvoicesPresentational = () => {
	return (
		<Row className="invoices_container">
			<ContentHeader title="Invoices" />
			<Col className="p_10" xl={24} sm={24} xs={24}>
				<Col xl={24} sm={24} xs={24} className="invoices_container_title">
					Recent Invoices
				</Col>
				<Col xl={24} sm={24} xs={24}>
					<Row>
						{Array(10)
							.fill('')
							.map(() => (
								<Card />
							))}
					</Row>
				</Col>
			</Col>
		</Row>
	);
};

export default InvoicesPresentational;
