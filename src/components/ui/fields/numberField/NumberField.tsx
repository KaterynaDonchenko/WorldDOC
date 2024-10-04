import type { InputHTMLAttributes, PropsWithChildren, ReactNode, ReactElement} from "react";
import {useEffect, useState, useRef, isValidElement, Children, cloneElement,} from 'react'
import { useField } from "formik";
import { useCloseDropdown } from "@/hooks/useCloseDropdown";
import CountryList from 'country-list-with-dial-code-and-flag'

import styles from './NumberField.module.scss';

type TextFieldProps = PropsWithChildren<{
    label: string;
    name: string;
    labelClassName?: string;
    inputClassName?: string;
    children: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>>;


export function NumberField({ label, 
                              name, 
                              labelClassName = styles.label, 
                              inputClassName = styles.input,
                              children, 
                              ...rest}: TextFieldProps) {
    const [field1, meta1] = useField(name)    
    const [selectItem, setSelectItem] = useState({flag: '', dial_code: ''})
    const [classNumberList, setClassNumberList] = useState(styles.hide)
    let fullNumber: string 
    let onChangeFullNumber: (e: React.ChangeEvent<HTMLInputElement>) => void
    let setFullNumber: (value: string) => void
    const dropdownRef = useRef<HTMLDivElement>(null)

    if (isValidElement(children)) {
        const [field2, meta2, helper] = useField(children.props.name)
        
        fullNumber = field2.value
        onChangeFullNumber = field2.onChange
        setFullNumber = helper.setValue
    }

    const { dial_code } = selectItem
    const { value } = field1
    
    const countryCodeNumberArray = CountryList.getAll()

    useCloseDropdown(dropdownRef, setClassNumberList, styles.hide)

    useEffect(() => {
        const countryData = CountryList.findOneByDialCode('+93');

        if (!countryData) {
            throw new Error('Invalid country code'); 
        }
        
        const {flag, dial_code} = countryData

        setSelectItem({flag, dial_code})
        setFullNumber(`${dial_code}${value}`)
    }, [])

    useEffect(() => {
        setFullNumber(`${dial_code}${value}`)
    }, [dial_code, value])
    
    const setSelectValue = (flag: string,  dial_code: string) => {
        setSelectItem({flag, dial_code})
        setClassNumberList(styles.hide)
    }

    const changeViewNumberList = () => {
        setClassNumberList(prev => prev = prev === 'NumberField_hide__MFGX_' ? styles.show : styles.hide)
    }

    const getCountryCodeNumberSelect = () => {
        return (
            <div className={styles['country-code-select']}>
                <div className={styles['country-code-select-value']}
                     onClick={changeViewNumberList}
                >
                    <span className={styles['country-code-select-item-flag']}>{selectItem.flag}</span>
                    <span className={styles['country-code-select-item-code']}>{selectItem.dial_code}</span>
                </div>
                <div className={`${styles['country-code-select-list']} ${classNumberList}`} 
                     data-id='country-code-select-list'
                     ref={dropdownRef}>
                    {
                        countryCodeNumberArray.map((data, i): JSX.Element => {
                            return(
                                <div className={styles['country-code-select-item']} 
                                     key={i} 
                                     data-value={data.name}
                                     onClick={() => {setSelectValue(data.flag, data.dial_code)}}
                                     >
                                        <span className={styles['country-code-select-item-flag']}>{data.flag}</span>
                                        <div className={styles['country-code-select-item-country']}>{data.name}</div>
                                        <span>{data.dial_code}</span>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }

    const createHiddenInput = (children: ReactNode, code: string, number: string) => {
        const checkedNumber = typeof number === 'undefined' ? '' : number 
        return Children.map(children, child => {
            if (isValidElement(child) && child.type === 'input' && child.props.type === 'text') {
                return cloneElement(child as ReactElement, {
                        className: styles.hide,
                        value: fullNumber,
                        onChange: onChangeFullNumber
                })

            }
            return child
        })
    }

    const countryCodeNumberSelect = getCountryCodeNumberSelect()
    const hiddenInput = createHiddenInput(children, dial_code, value)

    return (
        <div className={styles.fieldWrapper}>
            <label className={labelClassName}>{label}</label>
                {countryCodeNumberSelect}
                <input
                    className={inputClassName}
                    {...field1} 
                    {...rest}
                />
                {hiddenInput}
            {meta1.touched && meta1.error ? ( <div className={styles.error}>{meta1.error}</div>) : null}
        </div>
    );
}