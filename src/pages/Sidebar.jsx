import { Layout, theme, Button } from "antd";
import MenuList  from "../components/MenuList.jsx";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import '../styles/Sidebar.css';
import { useState } from "react";
import ToggleThemeButton from "../components/ToggleThemeButton.jsx";

  const { Header, Sider } = Layout;

  function Sidebar() {
    const [darkTheme, setDarkTheme] = useState(true)
    const [ collapsed, setCollapsed] = useState(false)

    const toggleTheme = () =>{
      setDarkTheme(!darkTheme)
    };

    const {
      token : {colorBgContainer},
    } = theme.useToken();

    return (
      <Layout className="">
        
        <Sider 
          collapsed={collapsed} 
          collapsible 
          trigger={null} 
          theme={darkTheme ? 'dark' : 'light'} 
          className="sidebar" >
            
          <MenuList darkTheme={darkTheme}>
            <ToggleThemeButton darkTheme={darkTheme}
            toggleTheme={toggleTheme}/>
          </MenuList>
          <ToggleThemeButton darkTheme={darkTheme}
            toggleTheme={toggleTheme}/>
        </Sider>
        <Layout style={{width:40,height:10}}>{/* Pour agrandir et rétrécir le sidebar */}
            <Header style={{paddingTop:0,paddingLeft:0, width:0, background: colorBgContainer}}>
              <Button type='text'
                      className="toggle"
                      style={{paddingTop:0}}
                      onClick={()=> setCollapsed(!collapsed)}
                      icon={collapsed ? 
                <MenuUnfoldOutlined/> : <MenuFoldOutlined/> }
               />
              </Header>
          </Layout>

      </Layout>
    );
  }

  export default Sidebar;
