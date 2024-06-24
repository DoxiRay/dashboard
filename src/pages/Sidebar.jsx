import { Layout, theme, Button } from "antd";
import MenuList from "../components/MenuList.jsx";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import '../styles/Sidebar.css';
import { useState, useEffect } from "react";
import ToggleThemeButton from "../components/ToggleThemeButton.jsx";

const { Header, Sider } = Layout;

function Sidebar() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); //Vérifie la taille de la fenêtre
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="sidebar-layout">
      <Sider
        collapsed={collapsed || isMobile}
        collapsible
        trigger={null}
        theme={darkTheme ? 'dark' : 'light'}
        className="sidebar"
      >
        <MenuList darkTheme={darkTheme} />
        <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Sider>
      <Layout>{/*Pour reduire et agrandir le sidebar*/}
        {!isMobile && (
            <Button
              type='text'
              className="toggle"
              onClick={() => setCollapsed(!collapsed)}
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />

        )}
        
      </Layout>
    </Layout>
  );
}

export default Sidebar;
