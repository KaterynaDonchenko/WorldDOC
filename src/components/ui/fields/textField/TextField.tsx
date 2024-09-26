import { useField } from "formik";
import { InputHTMLAttributes, PropsWithChildren } from "react";

import styles from './TextField.module.scss';

type TextFieldProps = PropsWithChildren<{
    label: string;
    name: string;
    labelClassName?: string;
    inputClassName?: string;
  } & InputHTMLAttributes<HTMLInputElement>>;

export function TextField({ label, 
                            name, 
                            labelClassName = styles.label, 
                            inputClassName = styles.input, 
                            ...rest}: TextFieldProps) {
    const [field, meta] = useField(name);

    return (
        <>
            <label className={labelClassName}>{label}</label>
                <input
                    style={rest.type === 'date' ? {"width": "41%"} : undefined}
                    className={inputClassName} 
                    {...field} 
                    {...rest} 
                />
            {meta.touched && meta.error ? ( <div className={styles.error}>{meta.error}</div>) : null}
        </>
    );
}