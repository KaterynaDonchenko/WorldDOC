import type { PropsWithChildren, HTMLAttributes, ReactNode, ReactElement, ChangeEvent } from "react";
import {Children, isValidElement, useState, cloneElement, useEffect} from 'react'
import { useField } from "formik";

import styles from './RadioGroupField.module.scss'

type RadioGroupFieldProps = PropsWithChildren<{
    label: string;
    name: string;
    labelClassName?: string;
    radioGroupClassName?: string;
} & HTMLAttributes<HTMLDivElement>>;

export function RadioGroupField({ label,
                             name, 
                             labelClassName = styles.label, 
                             radioGroupClassName,
                             children, 
                             ...rest}:  RadioGroupFieldProps) {

    const [field, meta, helper] = useField(name);
    const [selectedRadioButton, setSelectedRadioButton] = useState('Male');
    const {setValue} = helper

    useEffect(() => {
        setValue(selectedRadioButton)
    }, [])

    const clickRadioButton = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedRadioButton(event.target.value)
        setValue(event.target.value)
    }

    const createRadioButtons = (children: ReactNode) => {
        return Children.map(children, (child, index) => {
            if (isValidElement(child) && child.type === 'input' && child.props.type === 'radio') {
                const checked = child.props.value === selectedRadioButton;

                return (
                  <label key={index} className={styles['label-radio-button']}>
                    {child.props.id}
                    {cloneElement(child as ReactElement, {
                        checked,
                        onChange: clickRadioButton,
                        className: styles.check
                    })}
                  </label>
                );
              }
              return null;
        })
    }

    const radioButtons = createRadioButtons(children) 
    return (
        <>
            <label className={labelClassName}>{label}</label>
            <div
                className={radioGroupClassName} 
                {...field} 
                {...rest} 
            >
                {radioButtons}    
            </div>
            {meta.touched && meta.error ? ( <div className={styles.error}>{meta.error}</div>) : null}
        </>
    )

}