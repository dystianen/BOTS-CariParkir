import React, {useEffect, useState} from 'react';
import DefaultLayout from "../../components/Layout/DefaultLayout";
import {observer} from "mobx-react-lite";
import Image from "next/image";
import {Button, Divider, Form, Input, Modal, Spin} from "antd";
import Constraint from "../../components/Constraint";
import Ask from "../../components/Ask";
import Location from "../../components/Location";
import DownloadApps from "../../components/DownloadApps";
import Sheet from 'react-modal-sheet';
import Countdown from "react-countdown";
import {useRouter} from "next/router";

const Payment = observer(() => {
    const [form] = Form.useForm();
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onOpenSheet = () => setOpen(true);
    const onCloseSheet = () => setOpen(false);

    const Completionist = () => <span>You are good to go!</span>;

    const renderer = ({minutes, seconds, completed}) => {
        if (completed) {
            // router.push('/flash-screen');
        } else {
            return <span>{minutes}:{seconds}</span>;
        }
    };

    return (
        <>
            <div className="flex items-center justify-center bg-[#00AED6] h-10 text-base">
                <span className={'text-white'}>Selesaikan Pesanan mu dalam <Countdown date={Date.now() + 300000}
                                                                                      renderer={renderer}/></span>
            </div>

            <div className={'bg-white m-2 py-4 px-6 rounded-lg'}>
                <Location/>

                <Form form={form} layout={'vertical'}>
                    <div className={'mt-5'}>
                        <Form.Item name="phone"
                                   label={<span className={'font-semibold text-xl'}>Nomor Telepon Pembayaran</span>}
                                   rules={[
                                       {required: true, message: "Silahkan masukan Nomor Ponsel!"},
                                       {min: 10, max: 14, message: "Nomor Ponsel tidak sesuai!"},
                                   ]}>
                            <Input
                                type={'number'}
                                className={'rounded-lg'}
                                size={'large'}
                                suffix={<Image src={'/assets/icons/gopay.svg'} width={80} height={30}/>}
                                placeholder={'080123456789'}/>
                        </Form.Item>

                        <p>Dengan melanjutkan, saya telah membaca dan menyetujui <span
                            className={'text-[#FF9400] underline underline-offset-2'}>Syarat & Ketentuan</span> di
                            CariParkir.</p>

                        <Divider dashed className={'my-8 border-[#c1c1c1]'} style={{width: '2px 0 0'}}/>
                    </div>

                    <div className={'flex justify-between'}>
                        <h3 className={'text-lg font-bold'}>Total Pembayaran</h3>
                        <h3 className={'text-lg font-bold text-[#FF6103]'}>Rp. 99.000</h3>
                    </div>

                    <Form.Item shouldUpdate>
                        {() => (
                            <Button
                                disabled={
                                    !form.isFieldsTouched(true) ||
                                    !!form.getFieldsError().filter(({errors}) => errors.length).length
                                }
                                block
                                className={`${!form.isFieldsTouched(true) ||
                                !!form.getFieldsError().filter(({errors}) => errors.length).length ? 'bg-[#919191]' : 'bg-black'} 
                                text-white text-xl h-12 rounded-lg`}
                                onClick={onOpenSheet}>Bayar</Button>
                        )}
                    </Form.Item>
                </Form>
            </div>

            {/*ADA KENDALA*/}
            <Constraint/>
            <Divider/>

            {/*BUTUH BANTUAN*/}
            <Ask/>

            {/*DOWNLOAD APPS*/}
            <DownloadApps/>

            {/*MODAL LOADING*/}
            <Modal
                className={'rounded-lg'}
                open={isLoading}
                footer={null}
                closable={false}
                maskClosable={false}
                bodyStyle={{paddingLeft: 5, paddingRight: 5}}>
                <div className={'flex flex-col justify-center'}>
                    <Spin size={'large'}/>
                    <span className={'text-center font-semibold'}>Mohon tunggu</span>
                    <span className={'text-center text-sm'}>Saat ini pemesanan LOCKEY anda sedang di proses. </span>
                </div>
            </Modal>

            {/*CONFIRMATION SHEET*/}
            <Sheet isOpen={open} onClose={() => setOpen(false)} snapPoints={[400]} className={'flex justify-center'}>
                <Sheet.Container>
                    <Sheet.Header/>
                    <Sheet.Content>
                        <div className={'px-5 max-w-lg'}>
                            <div className={'flex justify-center'}>
                                <Image src={'/assets/images/confirmation.svg'} width={200} height={200}
                                       alt={'confirmation'}/>
                            </div>

                            <h3 className={'text-lg font-bold'}>Konfirmasi Pembayaran?</h3>
                            <p>Tidak berlaku pembatalan atau pengembalian dana setelah pembayaran selesai. </p>

                            <div className={'flex justify-between gap-4'}>
                                <Button size={'large'} className={'w-full rounded-lg'}
                                        onClick={onCloseSheet}>Cancel</Button>
                                <Button size={'large'} className={'w-full rounded-lg bg-black text-white'}
                                        onClick={() => {
                                            setOpen(false)
                                            setIsLoading(true)
                                        }}>Bayar</Button>
                            </div>
                        </div>
                    </Sheet.Content>
                </Sheet.Container>

                <Sheet.Backdrop/>
            </Sheet>
        </>
    )
})

Payment.getLayout = function Layout(page) {
    return <DefaultLayout>
        {page}
    </DefaultLayout>;
}
;

export default Payment;
