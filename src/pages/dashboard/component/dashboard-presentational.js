import React, { useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Row, Col } from 'antd';
import './dashboard.scss';
import { DoughnutComponent } from '@sharedComponent/doughnut-chart';

const originData = [];

for (let i = 0; i < 10; i++) {
	originData.push({
		key: i.toString(),
		Scrip: 'AADR',
		Quantity: '430',
		Price: '$50.30',
		Avg: '$41.75',
		Invested: '$17,952.07',
		Portfolio: '22.06%',
		Invested: '$3,676.93',
		Unrealized: '20.48%',
	});
}

const EditableCell = ({ editing, dataIndex, title, inputType, record, index, children, ...restProps }) => {
	const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
	return (
		<td {...restProps}>
			{editing ? (
				<Form.Item
					name={dataIndex}
					style={{
						margin: 0,
					}}
					rules={[
						{
							required: true,
							message: `Please Input ${title}!`,
						},
					]}>
					{inputNode}
				</Form.Item>
			) : (
				children
			)}
		</td>
	);
};

const DashboardPresentational = ({ onIncrementClick, counterVal }) => {
	const [form] = Form.useForm();
	const [data, setData] = useState(originData);
	const [editingKey, setEditingKey] = useState('');

	const isEditing = (record) => record.key === editingKey;

	const edit = (record) => {
		form.setFieldsValue({
			name: '',
			age: '',
			address: '',
			...record,
		});
		setEditingKey(record.key);
	};

	const cancel = () => {
		setEditingKey('');
	};

	const save = async (key) => {
		try {
			const row = await form.validateFields();
			const newData = [...data];
			const index = newData.findIndex((item) => key === item.key);

			if (index > -1) {
				const item = newData[index];
				newData.splice(index, 1, { ...item, ...row });
				setData(newData);
				setEditingKey('');
			} else {
				newData.push(row);
				setData(newData);
				setEditingKey('');
			}
		} catch (errInfo) {
			console.log('Validate Failed:', errInfo);
		}
	};

	const columns = [
		{
			title: 'Scrip',
			dataIndex: 'Scrip',
			// width: '25%',
			editable: true,
		},
		{
			title: 'Quantity',
			dataIndex: 'Quantity',
			// width: '15%',
			editable: true,
		},
		{
			title: 'Price',
			dataIndex: 'Price',
			// width: '40%',
			editable: true,
		},
		{
			title: 'Avg',
			dataIndex: 'Avg',
			// width: '40%',
			editable: true,
		},
		{
			title: 'Invested',
			dataIndex: 'Invested',
			// width: '40%',
			editable: true,
		},
		{
			title: 'Portfolio',
			dataIndex: 'Portfolio',
			// width: '40%',
			editable: true,
		},
		{
			title: 'Invested',
			dataIndex: 'Invested',
			// width: '40%',
			editable: true,
		},
		{
			title: 'Unrealized',
			dataIndex: 'Unrealized',
			// width: '40%',
			editable: true,
		},
		// {
		// 	title: 'operation',
		// 	dataIndex: 'operation',
		// 	render: (_, record) => {
		// 		const editable = isEditing(record);
		// 		return editable ? (
		// 			<span>
		// 				<a
		// 					href="javascript:;"
		// 					onClick={() => save(record.key)}
		// 					style={{
		// 						marginRight: 8,
		// 					}}>
		// 					Save
		// 				</a>
		// 				<Popconfirm title="Sure to cancel?" onConfirm={cancel}>
		// 					<a>Cancel</a>
		// 				</Popconfirm>
		// 			</span>
		// 		) : (
		// 			<a disabled={editingKey !== ''} onClick={() => edit(record)}>
		// 				Edit
		// 			</a>
		// 		);
		// 	},
		// },
	];
	const mergedColumns = columns.map((col) => {
		if (!col.editable) {
			return col;
		}

		return {
			...col,
			onCell: (record) => ({
				record,
				inputType: col.dataIndex === 'age' ? 'number' : 'text',
				dataIndex: col.dataIndex,
				title: col.title,
				editing: isEditing(record),
			}),
		};
	});

	return (
		<Row justify="center" className="dashboard_container">
			<Col xl={18}>
				<Col xl={24} className="card_container">
					{Array(3)
						.fill('')
						.map((a, i) => (
							<Col className="card_style">
								<Row>
									<Col xl={6}>hai</Col>
									<Col xl={6}>hai</Col>
									<Col xl={6}>hai</Col>
									<Col xl={6}>hai</Col>
								</Row>
							</Col>
						))}
				</Col>
			</Col>
			<Col xl={6}>
				<Col style={{ width: '100%' }}>
					<DoughnutComponent />
				</Col>
			</Col>
			<Col xl={22}>
				<Form form={form} component={false}>
					<Table
						components={{
							body: {
								cell: EditableCell,
							},
						}}
						bordered
						dataSource={data}
						columns={mergedColumns}
						rowClassName="editable-row"
						className="custom_table"
						pagination={{
							onChange: cancel,
						}}
					/>
				</Form>
			</Col>
		</Row>
	);
};

export default DashboardPresentational;
