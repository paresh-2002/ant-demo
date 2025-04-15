import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Flex, Layout } from 'antd'
import { Footer } from 'antd/es/layout/layout'
import Banner from './components/Banner'
import ItemsLists from './components/ItemsLists'
import RightBanner from './components/RightBanner'
import UserList from './components/UserList'
const { Header, Content, Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={value => setCollapsed(value)}
          style={{ background: 'white' }}
          className='sidebar-btn'
        >
          <Sidebar />
        </Sider>
        <Layout className='main-content'>
          <Header style={{ padding: 0, background: 'white' }} >
            <Navbar />
          </Header>
          <Content style={{ padding: '32px' }}>
            <Flex gap={'10px'}>
              <div className='content-left'>
                <Banner />
                <ItemsLists />
              </div>
              <div className='content-right'>
                <RightBanner />
                <UserList />
              </div>
            </Flex>
          </Content>
          <Footer style={{ textAlign: 'center', background: '#e6e3e3', paddingBottom: '10px', color:'#4f6f52'}}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  )
}

export default App
