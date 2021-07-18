import React from "react";
import ParticlesLayout from "../ParticlesLayout";
import {Layout, Typography, Menu, Popover, Button} from "antd";
import {CalendarOutlined, HomeOutlined, SettingOutlined, UserOutlined} from "@ant-design/icons";
import DesktopLayoutHeader from "./DesktopLayoutHeader";
import MenuList from "../../MenuList";
import DesktopLayoutMenu from "./DesktopLayoutMenu";
import styles from './DesktopLayout.module.css';

const {Sider, Header, Content, Footer} = Layout;
const {Paragraph, Text} = Typography;

const DesktopLayout = ({children}) => {
    return <ParticlesLayout>
        <Layout
            theme={"light"}
            className={"transparent"}
            hasSider={true}>
            <Sider
                className={"transparent"}
                width={240}
                style={{
                }}
            >
                <Paragraph
                    className={styles.brandName + " yo"}
                >
                    Boilerplate
                </Paragraph>
                <DesktopLayoutMenu/>
            </Sider>
            <Layout>
                <DesktopLayoutHeader/>
                <Content className={styles.content}>
                    {children}
                </Content>
            </Layout>
        </Layout>
    </ParticlesLayout>
}

export default DesktopLayout;
