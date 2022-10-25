import React, {useEffect, useRef, useState} from 'react';
import {Badge, Divider, Tag} from "antd";
import Image from "next/image";
import {DownCircleOutlined} from "@ant-design/icons";
import autoAnimate from "@formkit/auto-animate";

const Transaction = () => {
    const [collapse, setCollapse] = useState(false);
    const parentRef = useRef(null)

    useEffect(() => {
        if (parentRef.current) {
            autoAnimate(parentRef.current);
        }
    }, [parentRef])

    return (
        <>
            <div className={'bg-white mt-3 border-[#E5E9F2] shadow rounded-lg'} ref={parentRef}>
                <div className={'flex justify-between items-center p-3'}>
                    <div className={'flex flex-col'}>
                        <span className={'font-semibold'}>CP-20220924-IaNr</span>
                        <span className={'text-[#B7BAC2]'}>24/09/2022, 9:40</span>
                    </div>

                    <div>
                        <Tag color={'warning'} className={'p-2 rounded'}>Berlangsung</Tag>
                    </div>
                </div>

                {!collapse && <Divider className={'m-0'}/>}

                {collapse && (
                    <>
                        <div className={'flex justify-between gap-2 bg-slate-50 border-2 border-x'}>
                            <div className={'flex flex-col pl-3 py-3 gap-2'}>
                                <div className={'flex flex-col'}>
                                    <span className={'font-semibold'}>Lokasi</span>
                                    <span className={'text-[#515257]'}>Pancoran Chinatown Point Point PointPoint</span>
                                </div>
                                <div className={'flex flex-col'}>
                                    <span className={'font-semibold'}>Total Harga</span>
                                    <span className={'text-[#FF6103]'}>Rp. 99.000</span>
                                </div>
                                <div>
                                    <Image src={'/assets/images/astrapay.png'} width={120} height={30}/>
                                </div>
                            </div>

                            <div className={'flex flex-col items-center w-44 pr-3 py-3'}>
                                <span className={'font-semibold'}>Status Parkir</span>
                                <Badge color={'#FF9400'} text={<span className={'text-[#FF9400]'}>In-Location</span>}/>
                            </div>
                        </div>
                    </>
                )}

                <div className={'flex items-center gap-2 hover:cursor-pointer p-3'} onClick={() => setCollapse(!collapse)}>
                    <span className={'text-[#96969a] text-sm'}>Lihat Detail</span>
                    <DownCircleOutlined rotate={collapse ? 180 : 0} className={'text-[#96969a]'}/>
                </div>
            </div>
        </>
    )
}

export default Transaction;
