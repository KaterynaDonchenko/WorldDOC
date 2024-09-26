import {useEffect, useState, useRef} from 'react'
import type { InputHTMLAttributes, PropsWithChildren, MouseEvent} from "react";
import { useField } from "formik";
import { useCloseDropdown } from "@/hooks/useCloseDropdown";
import CountryList from 'country-list-with-dial-code-and-flag'

import styles from './CountrySelectFiled.module.scss';

type TextFieldProps = PropsWithChildren<{
    label: string;
    name: string;
    labelClassName?: string;
    selectClassName?: string;
    countryTouched?: boolean
} & InputHTMLAttributes<HTMLInputElement>>;


export function CountrySelectField({ label, 
                              name, 
                              labelClassName = styles.label, 
                              selectClassName = styles.select, 
                              countryTouched,
                              ...rest}: TextFieldProps) {
    const [field, meta, helper] = useField(name)
    const [selectedCountry, setSelectedCountry] = useState('')
    const [classCountryList, setClassCountryList] = useState(styles.hide)
    const refDropdown = useRef<HTMLDivElement>(null)

    const { setValue } = helper
 
    const countryCodeNumberArray = CountryList.getAll()

    useCloseDropdown(refDropdown, setClassCountryList, styles.hide)

    useEffect(() => {
        const countryData = CountryList.findOneByDialCode('+93');

        if (!countryData) {
            throw new Error('Invalid country code'); 
        }

        setSelectedCountry(countryData.name)
        setValue(countryData.name)
    }, [])

    const setSelectValue = (e: MouseEvent<HTMLDivElement>, country: string) => {
        setSelectedCountry(country)
        setValue(country)
        setClassCountryList(styles.hide)
    }
    

    const changeViewNumberList = () => {
        setClassCountryList(prev => prev = prev === 'CountrySelectFiled_hide__vCEGz' ? styles.show : styles.hide)
    }

    const getCountry = () => {

        return (
            <div className={styles['country-select']}>
                <div className={styles['country-select-value']}
                     onClick={changeViewNumberList}
                >
                    <span  className={styles['country-select-item-country']}>
                            {selectedCountry}
                    </span>
                </div>
                <div className={`${styles['country-select-list']} ${classCountryList}`} 
                     data-id='country-select-list'
                     ref={refDropdown}>
                    {
                        countryCodeNumberArray.map((data, i): JSX.Element => {
                            return(
                                <div className={styles['country-select-item']} 
                                     key={i} 
                                     data-value={data.name}
                                     data-country-code={data.dial_code}
                                     onClick={(e) => {setSelectValue(e, data.name)}}
                                     >
                                        <span className={styles['country-select-item']}>{data.name}</span>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }

    const country = getCountry()

    return (
        <>
            <label className={labelClassName}>{label}</label>
                <div
                    className={selectClassName} 
                    {...field} 
                    {...rest}
                >
                    {country}
                </div>
            {countryTouched && meta.error ? ( <div className={styles.error}>{meta.error}</div>) : null}
        </>
    );
}