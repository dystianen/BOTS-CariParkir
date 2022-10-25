import React from 'react';
import Image from "next/image";
import {Divider} from "antd";

const Location = () => {
    return (
        <div>
            <div className={'flex flex-col items-center gap-4'}>
                <Image src={'/assets/images/location.svg'} width={80} height={80}/>

                <div className={'text-center'}>
                    <h1 className={'font-bold'}>LOCKEY Lippo Mall Kemang</h1>
                    <p className={'text-sm text-[#B7BAC2]'}>Jl. Pangeran Antasari No.36, Bangka, Kec. Mampang Prpt.,
                        Kota, Daerah
                        Khusus Ibukota
                        Jakarta
                        12150</p>
                </div>
            </div>

            <Divider dashed className={'my-2 border-[#c1c1c1]'} style={{width: '2px 0 0'}}/>
        </div>
    )
}

export default Location;
