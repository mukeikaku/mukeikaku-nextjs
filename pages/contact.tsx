import { NextPage } from 'next'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import Meta from '@/components/Meta'
import type MetaType from '@/types/MetaType'

enum SubjectEnum {
    product = '製品に関するお問合せ',
    other = 'その他のお問合せ'
}

type Inputs = {
    name: string;
    email: string;
    tel: string;
    subject: SubjectEnum;
    message: string;
};


const Home: NextPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log('onSubmit:', data)
    console.log('watch:', watch('subject'))
    return (
        <>
            {/* <Meta {...meta} /> */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <input placeholder='Name' {...register('name', { required: true })} />
                    {errors.name && (
                        <span style={{ color: 'red' }}>This field is required</span>
                    )}
                </label>
                <label>
                    <select {...register('subject', { required: true })}>
                        <option value="製品に関するお問合せ">製品に関するお問合せ</option>
                        <option value="その他のお問合せ">その他のお問合せ</option>
                    </select>
                </label>
                <input type="submit" />
            </form>
        </>
    )
}

export default Home
