import React from 'react';
import {Button, Image} from "antd";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import {useRouter} from "next/router";

const SuccessPayment = () => {
    const router = useRouter();

    return (
        <div>
            <div className="grid grid-cols-3 items-center bg-[#FF9400] w-full h-16 px-6 lg:px-10">
                <div
                    className={'cursor-pointer'}
                    onClick={() => router.back()}>
                    <Image
                        src={'/assets/icons/arrow-left.svg'}
                        preview={false}
                    />
                </div>
                <div className={'col-span-2 lg:ml-10'}>
                    <Image
                        src={'/assets/images/cariparkir2.svg'}
                        preview={false}/>
                </div>
            </div>

            <div className={'flex flex-col items-center gap-6'}>
                <Image src={'/assets/images/hand-tree.png'} alt={'success'} preview={false}/>

                <div className={'flex flex-col text-center'}>
                    <span className={'font-bold text-2xl'}>Selamat!</span>
                    <span className={'text-xl'}>Pembayaran LOCKEY Berhasil</span>
                </div>

                <div className={'flex flex-col text-center'}>
                    <span className={'font-bold text-xl'}>Lippo Mall Kemang</span>
                    <span className={'text-[#FF6103] font-bold text-xl'}>GROUNDFLOOR - 05</span>
                </div>

                <div className={'w-4/5 p-4 bg-white border-2 border-slate-200 rounded-lg mt-5'}>
                    <div className={'flex flex-col justify-center gap-4'}>
                        <div className={'flex flex-col'}>
                            <span className={'text-[#B7BAC2]'}>Waktu Kedatangan</span>
                            <div className={'flex flex-row items-center gap-2'}>
                                <Image src={'/assets/icons/clock.svg'}/>
                                <span className={'text-[#0A7BC0] font-semibold'}>Pukul 13:33 - 14:33</span>
                            </div>
                        </div>

                        <div className={'flex flex-col'}>
                            <span className={'text-[#B7BAC2]'}>Total Biaya Parkir</span>
                            <div className={'flex flex-row items-center gap-2'}>
                                <Image src={'/assets/icons/money.svg'}/>
                                <span className={'text-[#FF6103]'}>Rp 99.000</span>
                            </div>
                        </div>
                    </div>
                </div>

                <Button size={'large'}
                        className={'w-4/5 h-[41px] bg-black text-white mt-10 rounded-lg'}>Lanjutkan</Button>
            </div>
        </div>
    )
}

SuccessPayment.getLayout = function Layout(page) {
    return <DefaultLayout>
        {page}
    </DefaultLayout>;
};

export default SuccessPayment;