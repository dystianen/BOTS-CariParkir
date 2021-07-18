import React from 'react';
import {Menu} from "antd";
import {HomeOutlined} from "@ant-design/icons";

const DesktopLayoutMenu = (props) => (
    <Menu
        defaultOpenKeys={["sub4"]}
        theme="light"
        style={{
            borderRightWidth: 0,
            marginLeft: 24,
        }}
        onClick={({keyPath, item}) => {
            // props.closeLeftDrawer();
        }}
        mode="inline"
        selectedKeys={[]}
        onSelect={({setKeys, item, selectedKeys}) => {
        }}
        overflowedIndicator={0}
        forceSubMenuRender={true}
    >
        <Menu.Item key="home">
            <HomeOutlined/>
            <span>Home</span>
        </Menu.Item>
        <Menu.Item key="about">
            <HomeOutlined/>
            <span>About</span>
        </Menu.Item>
        <Menu.Item key="setting">
            <HomeOutlined/>
            <span>Setting</span>
        </Menu.Item>
    </Menu>
);

export default DesktopLayoutMenu;
