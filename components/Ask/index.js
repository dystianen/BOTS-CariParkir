import React from 'react';
import {askRepository} from "../../repository/ask";
import Image from "next/image";

const Ask = () => {
    const {data: contacts} = askRepository.hooks.useGetContacts();

    const dataContact = [
        {
            title: "Telepon Customer Care",
            no: contacts?.results?.phone,
            timetable: contacts?.results?.phone_wording,
            icon: "/assets/icons/phone.svg"
        },
        {
            title: "Whatsapp Customer Care",
            no: contacts?.results?.whatsapp,
            timetable: contacts?.results?.whatsapp_wording,
            icon: "/assets/icons/whatsapp.svg"
        },
        {
            title: "Email Customer Care",
            no: contacts?.results?.email,
            timetable: contacts?.results?.email_wording,
            icon: "/assets/icons/email.svg"
        }
    ]

    return (
        <div className={'m-5 pb-10'}>
            <div>
                <h3 className={'text-lg font-bold underline underline-offset-2'}>Tanyakan ke kami?</h3>
                <p>Customer Care kami siap membantu Anda jika Anda memiliki pertanyaan atau masalah dalam menggunakan
                    aplikasi ini.</p>
            </div>

            <div className={'flex flex-col gap-4'}>
                {dataContact.map((it, index) => (
                    <div key={index} className={'flex flex-row justify-between gap-4 bg-white p-5 shadow-lg rounded-lg'}>
                        <div className={'flex flex-col'}>
                            <span>{it.title}</span>
                            <span className={'font-bold'}>{it.no}</span>
                            <span className={'text-xs text-[#9B9B9B]'}>{it.timetable}</span>
                        </div>
                        <Image src={it.icon} alt={'icon'}width={40} height={40} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Ask;
