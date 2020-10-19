import React, { Fragment } from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { appVariables } from '@constants/app-constants';

const ButtonComponent = ({ type, children }) => {
	const renderButton = () => {
		switch (type) {
			case appVariables.CREATE_INVOICE:
				return (
					<Button type="primary" icon={<PlusOutlined />}>
						{children}
					</Button>
				);

			default:
				return <Button type="primary">{children}</Button>;
		}
	};
	return <Fragment>{renderButton()}</Fragment>;
};

export default ButtonComponent;
