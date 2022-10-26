const { observer } = require("mobx-react-lite");
import { Button, Image } from "antd";
import DefaultLayout from "../../components/Layout/DefaultLayout";

const NotAvailable = observer(() => {

    const navigateDownload = () => {
        if (navigator.userAgent.toLocaleLowerCase().indexOf("iphone") > -1) {
            window.open("https://apps.apple.com/id/app/cariparkir-consumer-app/id1327224621", "_blank");
        } else {
            window.open("https://play.google.com/store/apps/details?id=id.sevadigital.cariparkir.consumer&hl=en&gl=US", "_blank");
        }
    }

    return (
        <>
            <div className="mx-auto flex flex-col">
                <div className="mt-9">
                    <p className={'text-[#FFB500] font-bold text-2xl lg:text-3xl text-center'}>Pesan LOCKEY</p>
                    <p className={'font-bold text-xl lg:text-2xl text-center'}>"Lippo Mall Kemang"</p>
                </div>
                <Image src={'/assets/backgrounds/not_available.svg'} preview={false} />
                <div className="mx-auto px-4 text-center mb-3">
                    <p className={'font-bold text-base md:text-lg lg:text-xl'}>Maaf, saat ini LOCKEY sudah terpesan semua.</p>
                    <p className="font-normal text-base md:text-lg lg:text-xl">Silahkan mencoba beberapa saat lagi. Atau install aplikasi CariParkir untuk pesan LOCKEY lebih mudah dan dapatkan penawaran menarik lainnya!</p>
                    <Button type="primary" className="bg-[#231F20] text-base md:text-lg lg:text-xl font-normal border-none h-[45px] rounded-3xl w-full" onClick={navigateDownload}>Download Cariparkir</Button>
                </div>
            </div>
        </>
    )
})
NotAvailable.getLayout = function Layout(page) {
    return <DefaultLayout>
        {page}
    </DefaultLayout>;
}
export default NotAvailable;