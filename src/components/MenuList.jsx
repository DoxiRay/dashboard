import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { AreaChartOutlined, HomeOutlined, AppstoreOutlined, LogoutOutlined } from "@ant-design/icons";

function MenuList({ darkTheme }) {
  return (
    <Menu theme={darkTheme ? 'dark' : 'light'} mode='inline' className='menu-bar'>
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/home">Home</Link>
      </Menu.Item>
      <Menu.Item key="store" icon={<AppstoreOutlined />}>
        <Link to="/store">Store</Link>
      </Menu.Item>
      <Menu.Item key="barchart" icon={<AreaChartOutlined />}>
        <Link to="/barchart">Bar Chart</Link>
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        <Link to="/">Log out</Link>
      </Menu.Item>
    </Menu>
  );
}

export default MenuList;
