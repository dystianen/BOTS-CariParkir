import React from 'react';
import Image from "next/image";
import {Button, Form, Input} from "antd";
import Transaction from "../Transaction";

const Constraint = () => {
    const [form] = Form.useForm();
    return (
        <div className={'bg-white px-7 py-5'}>
            <Image src={'/assets/images/logo.svg'} width={100} height={50}/>

            <h3 className={'text-lg font-bold'}>Ada kendala dengan transaksimu?</h3>
            <p>Cek transaksi dengan Order ID pembayaran:</p>

            <Form form={form} layout={'vertical'}>
                <Form.Item name="order_id" rules={[
                    {required: true, message: "Silahkan masukan Order ID!"},
                ]}>
                    <Input className={'rounded-lg'} size={'large'} placeholder={'CP-20220924-IaNr'}/>
                </Form.Item>

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
                        >
                            Cek
                        </Button>
                    )}
                </Form.Item>
            </Form>

            <h3 className={'font-bold text-xl my-4'}>Status Transaksi</h3>

            <div className={'bg-[#F7FCFC] border-2 border-[#DFDFDF] h-20 flex items-center gap-2 rounded-lg px-5 mt-2'}>
                <Image src={'/assets/icons/cariparkir.svg'} width={40} height={40}/>
                <div className={'flex flex-col'}>
                    <span className={'font-semibold'}>CP-20220924-IaNr</span>
                    {/*<span className={'text-[#FB5060] font-semibold text-sm'}>BELUM ADA TRANSAKSI</span>*/}
                </div>
            </div>

            <Transaction/>
            <Transaction/>
        </div>
    )
}

export default Constraint;
