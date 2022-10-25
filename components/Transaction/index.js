import React from 'react';
import {Divider, Tag} from "antd";
import Image from "next/image";

const Transaction = () => {
    return (
        <>
            <div className={'bg-white p-3 mt-3 border-[#E5E9F2] shadow rounded-lg'}>
                <h3 className={'font-bold text-xl'}>Pancoran Chinatown Point</h3>
                <Divider className={'my-2'}/>

                <div className={'flex justify-between'}>
                    <div className={'flex flex-col'}>
                        <div>
                            <span className={'font-semibold'}>CP-20220924-IaNr</span>
                            <p className={'text-[#B7BAC2]'}>24/09/2022, 9:40</p>
                        </div>
                        <div>
                            <span className={'font-semibold'}>Total Harga</span>
                            <p className={'text-[#FF6103]'}>Rp. 99.000</p>
                        </div>
                        <div>
                            <Image src={'/assets/images/astrapay.png'} width={120} height={30}/>
                        </div>
                    </div>

                    <div className={'flex flex-col items-center'}>
                        <div className={'w-24 text-center'}>
                            <p className={'font-semibold'}>Menunggu Pembayaran</p>
                        </div>

                        <div>
                            <Tag color={'warning'} className={'p-1 mt-2 rounded'}>Berlangsung</Tag>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Transaction;
