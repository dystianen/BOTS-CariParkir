import React from 'react';
import Image from "next/image";

const DownloadApps = () => {
    return (
        <div className={'m-5 z-50 text-center'}>
            <h3 className={'text-lg font-bold'}>Gunakan aplikasi CariParkir untuk mendapatkan harga spesial</h3>

            <div className={'flex flex-row justify-center gap-5'}>
                <Image className={'hover:cursor-pointer'} src={'/assets/images/app-store.svg'} alt={'app-store'} width={180} height={100} />
                <Image className={'hover:cursor-pointer'} src={'/assets/images/play-store.svg'} alt={'app-store'} width={180} height={100} />
            </div>
        </div>
    )
}

export default DownloadApps;
