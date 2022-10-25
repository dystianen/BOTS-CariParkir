import React from 'react';
import DefaultLayout from "../../components/Layout/DefaultLayout";
import Image from "next/image";

const FlashScreen = () => {
    return (
        <>
            {/*<div className={'absolute'}>*/}
                <Image src='/assets/backgrounds/flash-screen-2.svg' sizes={'100%'}  layout="fill"/>
            {/*</div>*/}
        </>
    )
}

FlashScreen.getLayout = function Layout(page) {
    return <DefaultLayout>
        {page}
    </DefaultLayout>;
};

export default FlashScreen;
