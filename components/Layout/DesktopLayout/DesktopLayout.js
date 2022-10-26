import React from "react";
import ParticlesLayout from "../ParticlesLayout";
import {Layout, Image} from "antd";
const {Content} = Layout;

const DesktopLayout = ({children}) => {
    return <ParticlesLayout>
        <Layout
            theme={"light"}
            className={"relative max-w-2xl mx-auto bg-[#FFFFFF]"}
            hasSider={true}>
            <Content>
                <div className={'min-h-screen'}>
                    <div className={'z-50'}>{children}</div>
                    {/*<div className={'absolute bottom-0 -mb-2 z-10'}>*/}
                    {/*    <Image preview={false} src={'/assets/backgrounds/bg-pattern.png'} />*/}
                    {/*</div>*/}
                </div>
            </Content>
        </Layout>
    </ParticlesLayout>
}

export default DesktopLayout;
