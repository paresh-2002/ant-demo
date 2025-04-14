import { theme, Typography } from 'antd';
import { Header } from 'antd/es/layout/layout'
import React from 'react'
import SearchInput from './SearchInput';
const { Title } = Typography;

function Navbar() {
    
  return (
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0 50px'}}>
       <Title level={4} style={{marginTop:'15px', color:'#fffa4'}}>Welcome Back</Title>
        <SearchInput/>
    </div>
  )
}

export default Navbar
