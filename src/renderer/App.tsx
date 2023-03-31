import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import React, { useState } from 'react';

import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined, MenuUnfoldOutlined, MenuFoldOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import ChatModule from './ai/chat';
import Text2ImgModule from './text2img';
import Login from "./login";
const { Header, Content, Footer, Sider } = Layout;

import './App.css';

// const items: MenuProps['items'] = [
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
//   BarChartOutlined,
//   // CloudOutlined,
//   // AppstoreOutlined,
//   // TeamOutlined,
//   // ShopOutlined,
// ].map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon),
//   label: `nav ${index + 1}`,
// }));

const items: MenuProps['items'] = [{
  icon: React.createElement(UserOutlined),
  label: "chatGPT",
  key: "1"
}, {
  icon: React.createElement(VideoCameraOutlined),
  label: "mj图像生成",
  key: "2"
},
{
  icon: React.createElement(UploadOutlined),
  label: "d-id视频生成",
  key: "3"
},
]

const Hello: React.FC = () => {
  const [current, setCurrent] = useState('mail');
  const [key,setKey] = useState(1);

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const _changeMenu = (e:any) => {
    if(e.key == '1'){
      setKey(1)
    }
    setKey(e.key*1)
    console.log("大音希sands看",e)
  }
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Login/>
      {/* <Layout style={{height:"100%",boxShadow:"border-box"}}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            onClick={(e)=>{_changeMenu(e)}}
            style={{paddingTop:64}}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: '智能会话',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: '图像生成',
              },
              // {
              //   key: '3',
              //   icon: <UploadOutlined />,
              //   label: 'nav 3',
              // },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header style={{ padding: 0, background: colorBgContainer }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              // padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
           {key ==1 &&  <ChatModule/>}
           {key ==2 && <Text2ImgModule/>}
          </Content>
        </Layout>
      </Layout> */}
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
