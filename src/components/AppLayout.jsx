import React, { useState } from 'react';

import { Breadcrumb, Layout, theme } from 'antd';
import Sidebar from './Sidebar';
const { Header, Content, Footer,} = Layout;


const AppLayout = () => {
 
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar/>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default AppLayout;