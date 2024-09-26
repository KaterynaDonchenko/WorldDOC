import type { InputHTMLAttributes, PropsWithChildren} from "react";
import {useState} from 'react'
import { useField } from "formik";
import Image from "next/image";

import styles from './PasswordField.module.scss';

type PasswordFieldsProps = PropsWithChildren<{
    label: string;
    name: string;
    labelClassName?: string;
    inputClassName?: string;
} & InputHTMLAttributes<HTMLInputElement>>;

export function PasswordField({ label, 
                                name, 
                                labelClassName = styles.label, 
                                inputClassName = styles.input, 
                                ...rest}: PasswordFieldsProps) {
                  
    const [field, meta] = useField(name)
    const [type, setType] = useState('password')

    const changeViewPassword = () => {
        setType(prevType => prevType = prevType === 'password' ? 'text' : 'password' )
    }


    return (
        <>
            <label className={labelClassName}>{label}</label>
                <div className={styles.wrapperInput}>
                    <input
                        type={type}
                        className={inputClassName}
                        {...field} 
                        {...rest} 
                    />
                    <div className={styles.wrapperImg}
                         onClick={changeViewPassword}
                    >
                        <Image
                            src='/icons/view-hide.svg'
                            alt='view-hide'
                            className={styles.inputImg}
                            width={30}
                            height={30}
                        />
                    </div>
                </div>
            {meta.touched && meta.error ? ( <div className={styles.error}>{meta.error}</div>) : null}
        </>
    );
}