import { Typography, Menu, Dropdown, Button } from 'antd';
import React from 'react';
import { UserOutlined, BellOutlined } from '@ant-design/icons';
import SearchInput from './SearchInput';

const { Title } = Typography;

function Navbar() {
  const userMenu = (
    <Menu>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2">Settings</Menu.Item>
      <Menu.Item key="3">Logout</Menu.Item>
    </Menu>
  );

  const notificationsMenu = (
    <Menu>
      <Menu.Item key="1">Item 1</Menu.Item>
      <Menu.Item key="2">Item 2</Menu.Item>
      <Menu.Item key="3">View All</Menu.Item>
    </Menu>
  );

  return (
    <div className="navbar">
      <Title level={4} className="navbar-title">Welcome Back</Title>
      <div className="navbar-actions">
      <SearchInput />
        <Dropdown overlay={notificationsMenu} placement="bottomRight" arrow>
          <Button icon={<BellOutlined />} style={{background:'#4f6f52', color:'white'}}/>
        </Dropdown>
        <Dropdown overlay={userMenu} placement="bottomRight" arrow>
          <Button icon={<UserOutlined />} style={{background:'#4f6f52', color:'white'}}/>
        </Dropdown>
      </div>
    </div>
  );
}

export default Navbar;