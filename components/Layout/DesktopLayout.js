import React from "react";
import ParticlesLayout from "./ParticlesLayout";
import {Layout, Typography, Menu, Popover, Button} from "antd";
import {CalendarOutlined, HomeOutlined, SettingOutlined, UserOutlined} from "@ant-design/icons";

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
                    style={{
                        margin: 0,
                        padding: 0,
                        fontSize: 20,
                        marginLeft: 48,
                        marginTop: 24,
                        marginBottom: 44,
                        fontWeight: 600,
                        color: "#413d3e",
                    }}
                >
                    Boilerplate
                </Paragraph>

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
            </Sider>
            <Layout>
                <Header style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                }}>
                    <Popover
                        autoAdjustOverflow={true}
                        placement="bottomRight"
                        content={
                            <Menu
                                type={"line"}
                                inlineIndent={0}
                                theme="light"
                                style={{
                                    backgroundColor: "transparent",
                                    borderRightWidth: 0,
                                }}
                                mode="inline"
                            >
                                <Menu.Item>
                                    <span>Profile</span>
                                </Menu.Item>
                                <Menu.Item
                                    onClick={() => {
                                        // store.authentication.logout();
                                        // return history.push("/login");
                                    }}
                                >
                                    <span>Sign out</span>
                                </Menu.Item>
                            </Menu>
                        }
                        title={
                            <Text>
                                info@bangun-kreatif.com
                                {/*{store.userData.email}{" "}*/}
                                <Paragraph style={{fontWeight: 400}} type={"secondary-dark"}>
                                    Administrator
                                    {/*{store.userData.role}*/}
                                </Paragraph>
                            </Text>
                        }
                        trigger="click"
                        visible={false}
                        onVisibleChange={() => {
                        }}
                    >
                        <Button
                            size={"default"}
                            style={{}}
                            icon={
                                <UserOutlined style={{fontSize: "13px"}}/>
                            }
                        />
                    </Popover>
                </Header>
                <Content style={{
                    paddingRight: 16
                }}>
                    {children}
                </Content>
            </Layout>
        </Layout>
    </ParticlesLayout>
}

export default DesktopLayout;
