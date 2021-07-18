import React from 'react';
import {Button, Layout, Menu, Popover, Typography} from "antd";
import {UserOutlined} from "@ant-design/icons";

const {Sider, Header, Content, Footer} = Layout;
const {Paragraph, Text} = Typography;

const DesktopLayoutHeader = (props) => (
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
);

export default DesktopLayoutHeader;
