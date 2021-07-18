import ParticlesLayout from "../components/Layout/ParticlesLayout";
import React from "react";
import DefaultLayout from "../components/Layout/DefaultLayout";
import {Card, PageHeader} from "antd";

const Home = () => {
    return <div>
        <PageHeader
            style={{
            }}
            title={"Home"}
        >
        </PageHeader>
        <Card className={"flex text-gray-500"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut recusandae velit! Consequatur corporis, eum fuga, harum incidunt laboriosam minus necessitatibus neque non nostrum pariatur tempore. Dignissimos impedit rem tempora!
        </Card>
    </div>
}

Home.getLayout = function Layout(page) {
    return <DefaultLayout>
        {page}
    </DefaultLayout>;
};

export default Home;
