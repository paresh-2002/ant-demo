import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Layout} from 'antd'
import { Footer } from 'antd/es/layout/layout'
import Banner from './components/Banner'
import ItemsLists from './components/ItemsLists'
const { Header, Content,Sider} = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
    <Layout style={{ minHeight: '100vh' }}>
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={value => setCollapsed(value)}
      style={{position:'sticky',background:'white' }}
    >
      <Sidebar/>
    </Sider>
      <Layout>
        <Header style={{ padding: 0, background:'white'}} >
          <Navbar/>
        </Header>
        <Content style={{ margin: '0 16px', padding:'50px', display:'flex', justifyContent:'space-between',alignItems:'start'}}>
       <div className='content-left'>
       <Banner/>
       <ItemsLists/>
       </div>
       <div className='content-right'>
       <Banner/>
       </div>
        </Content>  
        <Footer style={{ textAlign: 'center', background:'#e6e3e3', height:'48px', paddingBottom:'10px'}}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
    </>
  )
}

export default App
