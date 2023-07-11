import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import React, { useEffect, useState } from 'react';

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
import TextLinkCModule from './link/text';
import ImgLinkCModule from './link/img';
import Login from "./login";
import { useNavigate } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

import './App.css';


const Hello: React.FC = () => {
  const [key, setKey] = useState(1);
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const _changeMenu = (e: any) => {
    if (e.key == '1') {
      setKey(1)
    }
    setKey(e.key * 1)
  }

  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [])


  return (
    <div style={{ width: "100%", height: "100%" }}>
      {/* <Login/> */}
      <Layout style={{ height: "100%", boxShadow: "border-box" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            onClick={(e) => { _changeMenu(e) }}
            style={{ paddingTop: 64 }}
            items={[
              {
                key: '1',
                icon: <TeamOutlined />,
                label: 'AI文案生成',
              }, {
                key: '2',
                icon: <TeamOutlined />,
                label: 'AI图片处理',
              }, {
                key: '6',
                icon: <UserOutlined />,
                label: 'AI智能会话',
              },
              {
                key: '7',
                icon: <VideoCameraOutlined />,
                label: 'AI生成图片',
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
            {key == 1 && <TextLinkCModule />}
            {key == 2 && <ImgLinkCModule />}
            {key == 6 && <ChatModule />}
            {key == 7 && <Text2ImgModule />}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}
