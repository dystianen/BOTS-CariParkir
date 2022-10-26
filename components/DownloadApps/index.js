import React from 'react';
import Image from "next/image";

const DownloadApps = () => {
    const handleDownload = (type) => {
        if (type === 'android') {
            window.open("https://play.google.com/store/apps/details?id=id.sevadigital.cariparkir.consumer&hl=en&gl=US", "_blank");
        } else {
            window.open("https://apps.apple.com/id/app/cariparkir-consumer-app/id1327224621", "_blank");
        }
    }

    return (
        <div className={'m-5 z-50 text-center'}>
            <h3 className={'text-lg font-bold'}>Gunakan aplikasi CariParkir untuk mendapatkan harga spesial</h3>

            <div className={'flex flex-row justify-center gap-5'}>
                <Image className={'hover:cursor-pointer'} src={'/assets/images/app-store.svg'} alt={'app-store'} width={180} height={100} onClick={() => handleDownload('ios')}/>
                <Image className={'hover:cursor-pointer'} src={'/assets/images/play-store.svg'} alt={'play-store'} width={180} height={100} onClick={() => handleDownload('android')}/>
            </div>
        </div>
    )
}

export default DownloadApps;
