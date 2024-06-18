import React from 'react';
import { Menu } from 'antd';
import { AreaChartOutlined, HomeOutlined, AppstoreOutlined, PieChartOutlined, SettingOutlined } from "@ant-design/icons";

function MenuList({ darkTheme }) {
  return (
    <Menu theme={darkTheme ? 'dark' : 'light'} mode='inline' className='menu-bar'>
      <Menu.Item key="home" icon={<HomeOutlined />}>Home</Menu.Item>
      <Menu.Item key="activity" icon={<AppstoreOutlined />}>Activity</Menu.Item>
      <Menu.Item key="progress" icon={<AreaChartOutlined />}> Stock chart</Menu.Item>
      <Menu.Item key="progress-sell" icon={<PieChartOutlined />}>Sell chart</Menu.Item>
      <Menu.Item key="setting" icon={<SettingOutlined />}>Setting</Menu.Item>
    </Menu>
  );
}

export default MenuList;
