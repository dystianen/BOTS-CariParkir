import ParticlesLayout from "../components/Layout/ParticlesLayout";
import React from "react";
import DefaultLayout from "../components/Layout/DefaultLayout";
import {Card, PageHeader} from "antd";

const About = () => {
    return <div>
        <PageHeader
            style={{
            }}
            title={"About"}
        >
        </PageHeader>
        <Card className={"flex text-gray-500"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut recusandae velit! Consequatur corporis, eum fuga, harum incidunt laboriosam minus necessitatibus neque non nostrum pariatur tempore. Dignissimos impedit rem tempora!
        </Card>
    </div>
}

About.getLayout = function Layout(page) {
    return <DefaultLayout>
        {page}
    </DefaultLayout>;
};

export default About;
