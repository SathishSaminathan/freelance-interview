import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

import ImageComponent from '@sharedComponent/image-component';
import { HomeRoutes } from 'src/routes';

const { Header, Content, Footer, Sider } = Layout;

const menus = [
	{
		name: 'Invoices',
		icon: <UserOutlined />,
		route: '/invoices',
	},
	{
		name: 'Product',
		icon: <VideoCameraOutlined />,
		route: '/create-invoices',
	},
	{
		name: 'GST',
		icon: <VideoCameraOutlined />,
		route: '/create-invoices',
	},
];

const MainLayoutPresentational = () => {
	return (
		<Layout style={{ height: '100%' }}>
			<Sider
				breakpoint="lg"
				collapsedWidth="0"
				onBreakpoint={(broken) => {
					console.log(broken);
				}}
				onCollapse={(collapsed, type) => {
					console.log(collapsed, type);
				}}>
				<Link to="/">
					<ImageComponent style={{ width: '30%', marginTop: 15 }} />
				</Link>
				<Menu className="custom_menu" theme="dark" mode="inline">
					{menus.map((menu, i) => (
						<Menu.Item key={i} icon={menu.icon}>
							<Link to={menu.route}>{menu.name}</Link>
						</Menu.Item>
					))}
				</Menu>
			</Sider>
			<Layout>
				<Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
				<Content style={{ margin: '24px 16px 0', height: '100%' }}>
					<div className="site-layout-background" style={{ borderRadius: 5, overflow: 'hidden', minHeight: '100%' }}>
						<HomeRoutes />
					</div>
				</Content>
				{/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
			</Layout>
		</Layout>
	);
};

export default MainLayoutPresentational;
