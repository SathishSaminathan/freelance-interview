import React from 'react';
import { Row, Col, Button } from 'antd';
import { useHistory } from 'react-router-dom';

import LottieComponent from '@sharedComponent/lottie-component';
import LottieFile from 'src/assets/lottie-files';

import './welcome-page.scss';

const Welcome = () => {
	const history = useHistory();
	return (
		<Row className="welcome_page_container p_10">
			<Col xl={24}>
				<span className="title">We help your business at free of cost</span>
			</Col>
			<Col xl={24} className="animation_area">
				<LottieComponent file={LottieFile.RecordNotFound} width={'50%'} />
				<Button onClick={() => history.push('/create-invoices')} type="primary">
					Create Invoice
				</Button>
			</Col>
		</Row>
	);
};

export default Welcome;
