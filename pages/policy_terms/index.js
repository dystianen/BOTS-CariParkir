import { observer } from "mobx-react-lite";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import { Image, Tabs } from "antd";
import { useRouter } from "next/router";

const PolicyTerms = observer(() => {

    const router = useRouter();

    const general_requirements = [
        {
            key: 1,
            value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since ',
        },
        {
            key: 2,
            value: 'bled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop',
        },
        {
            key: 3,
            value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since ',
        },
        {
            key: 4,
            value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since ',
        },
        {
            key: 5,
            value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since ',
        },
        {
            key: 6,
            value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since ',
        },
    ]
    const items = [
        {
            label: `Syarat & Ketentuan`,
            key: '1',
            children: [
                <p className="font-bold text-[10px] md:text-sm text-center mb-2" > Syarat - syarat & Ketentuan[Layanan] <i> (Terms & Condition of Serfices)</i></p>,
                <p className="font-bold text-[11px] md:text-base mb-7">PENTING: <span className="font-normal text-[10px] md:text-sm">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</span></p>,
                <p className="font-normal text-[10px] md:text-sm mb-7">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>,
                <p className="font-normal text-[10px] md:text-sm mb-7">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>,
                <p className="font-bold text-[11px] md:text-base">Ketentuan Umum</p>,
                general_requirements.map(value => (
                    <div className="flex">
                        <p key={value?.key} className="font-normal text-[10px] md:text-sm mb-0">{value?.key}.</p>
                        <p key={value?.key} className="font-normal text-[10px] md:text-sm mb-0">{value?.value}</p>
                    </div>
                ))
            ],
        },
        {
            label: `Kebijakan Privasi`,
            key: '2',
            children: [
                <p className="font-bold text-[10px] md:text-sm text-center mb-2" > Kebijakan Privasi <i> (Privacy Policy)</i></p>,
                <p className="font-bold text-[11px] md:text-base mb-7">PENTING: <span className="font-normal text-[10px] md:text-sm">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</span></p>,
                <p className="font-normal text-[10px] md:text-sm mb-7">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>,
                <p className="font-normal text-[10px] md:text-sm mb-7">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>,
                <p className="font-bold text-[11px] md:text-base">Ketentuan Umum</p>,
                general_requirements.map(value => (
                    <div className="flex">
                        <p key={value?.key} className="font-normal text-[10px] md:text-sm mb-0">{value?.key}.</p>
                        <p key={value?.key} className="font-normal text-[10px] md:text-sm mb-0">{value?.value}</p>
                    </div>
                ))
            ],
        },
    ];

    return (
        <>
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
                            preview={false} />
                    </div>
                </div>

                <div className="px-4">
                    <Tabs
                        defaultActiveKey="1"
                        centered={true}
                        items={items}
                    />
                </div>
            </div>
        </>
    )
})
PolicyTerms.getLayout = function Layout(page) {
    return <DefaultLayout>
        {page}
    </DefaultLayout>;
}

export default PolicyTerms;