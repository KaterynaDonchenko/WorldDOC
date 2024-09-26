'use client'

import { useEffect, useState} from "react";
import { Formik, FormikProps, Form, FormikHelpers} from "formik";
import * as Yup from 'yup'

import { useRegister } from "@/hooks/useRegister";


import { Title } from "@/components/ui/title/Title";
import { TextField } from '../../components/ui/fields/textField/TextField';
import { PasswordField } from "@/components/ui/fields/passwordField/PasswordField";
import { CountrySelectField } from "@/components/ui/fields/countrySelectField/CountrySelectField";
import { NumberField } from "@/components/ui/fields/numberField/NumberField";
import { RadioGroupField } from "@/components/ui/fields/radioGroupField/RadioGroupField";
import { Button } from "@/components/ui/button/Button";

import { IUser} from "@/types/auth.types";
import { EnumBiologicalSex } from "@/Enums/enum-biologicalSex";
import { EnumAuth } from "@/Enums/enum-auth";

import CountryList from 'country-list-with-dial-code-and-flag'

import styles from './Register.module.scss';

export function Register() {
    
    const { mutate, isPending, isSuccess} = useRegister(EnumAuth.REGISTER )
    const [ actions, setActions ] = useState<FormikHelpers<IUser>>()
    const [countryTouched, setCountryTouched] = useState(false)

    useEffect(() => {
        if (isSuccess && actions) actions.resetForm()
    }, [isSuccess])

    const postUser = (values: IUser, actions: FormikHelpers<IUser>) => {
        const {retypedEmail, retypedPassword, numberWithoutCode, ...newValues} = values
        mutate(newValues)
        setActions(actions)
    }

    return (
        <div className={styles.register}>
            <div className="container">
                <Title className={styles.title}>Create Your Account</Title>
                <div className={styles.note}><strong>Please note:</strong> Create your Patient Online Services Account using the form below. You must be 18 or older to create your account.</div>
                <div className={styles['form-wrapper']}>
                    <h2 className={styles['title-form']}>Enter patient information</h2>
                    <Formik
                        initialValues={{
                            firstName: '',
                            secondName: '',
                            email: '',
                            retypedEmail: '',
                            password: '',
                            retypedPassword: '',
                            numberWithoutCode: '',
                            phoneNumber: '',
                            country: '',
                            birthDate: '',
                            biologicalSex: EnumBiologicalSex.MALE
                        }}
                        validationSchema={ Yup.object({
                            firstName: Yup.string()
                                        .min(2, 'Must be 2 characters or more')
                                        .required('Required'),
                            secondName: Yup.string()
                                        .min(2, 'Must be 2 characters or more')
                                        .required('Required'),
                            email: Yup.string()
                                    .email('Must be email')
                                    .required('Required'),
                            retypedEmail: Yup.string()
                                    .oneOf([Yup.ref('email')], 'Emails must match')
                                    .required('Required'),
                            password: Yup.string()
                                    .min(8, 'Must be 8 characters or more')
                                    .matches(/(?=.*[0-9])/, 'Password must contain at least one number')  
                                    .matches(/(?=.*[A-Z])/, 'Password must contain at least one uppercase letter')  
                                    .matches(/(?=.*[a-z])/, 'Password must contain at least one lowercase letter')  
                                    .matches(/(?=.*[!@#$%^&*-+=&~`.,?/])/, 'Password must contain at least one special character')
                                    .required('Required'),
                            retypedPassword: Yup.string()
                                    .oneOf([Yup.ref('password')], 'Passwords must match')
                                    .required('Required'),
                            numberWithoutCode: Yup.number()
                                    .required('Required'),
                            country: Yup.string()
                                    .required('Country is required')
                                    .test({name: 'is-valid-country', 
                                           message: 'Country code must match with country', 
                                           test: function() {
                                                const { phoneNumber, numberWithoutCode, country } = this.parent 
                                                const countryData = CountryList.findByKeyword(country);

                                                if (!countryData || !countryData.length) {
                                                    return this.createError({ message: 'Invalid country name' });
                                                }

                                                const countryCode = countryData[0].dial_code;
                                                
                                                if (!phoneNumber || !countryCode) return false;

                                                if (!numberWithoutCode) {
                                                    setCountryTouched(true)
                                                    return phoneNumber === countryCode;
                                                } else {
                                                    const lengthNumberWithoutCode = numberWithoutCode.toString().length;

                                                    if (lengthNumberWithoutCode > phoneNumber.length) return false;
                                                    
                                                    setCountryTouched(true)
                                                    return phoneNumber.slice(0, -lengthNumberWithoutCode) === countryCode;
                                                }
                                            }
                                    }),
                            birthDate: Yup.date()
                                        .required('Required')
                        })}
                        onSubmit={(values, actions) => {
                            postUser(values, actions)
                        }}
                    >
                        {(props: FormikProps<IUser>) => (
                            <Form className={styles.form}>
                                <div className={styles.fieldWrapper}>
                                    <TextField labelClassName={styles.textFieldLabel} 
                                                label='Legal First Name:' 
                                                name='firstName' 
                                                type='text'/>
                                </div>
                                <div className={styles.fieldWrapper}>
                                    <TextField labelClassName={styles.textFieldLabel} 
                                            label='Legal Second Name:' 
                                            name='secondName' 
                                            type='text'/>
                                </div>
                                <div className={styles.fieldWrapper}>
                                    <TextField labelClassName={styles.textFieldLabel}
                                                label='Primary email address:' 
                                                name='email' 
                                                type='text'/>
                                </div>
                                <div className={styles.fieldWrapper}>
                                    <TextField  labelClassName={styles.textFieldLabel}
                                                label='Retype email address:' 
                                                name='retypedEmail' 
                                                type='text'/>
                                </div>
                                <div className={styles.fieldWrapper}>
                                    <PasswordField  labelClassName={styles.textFieldLabel}
                                                    label='Password:' 
                                                    name='password'/>
                                </div>
                                <div className={styles.fieldWrapper}>
                                    <PasswordField  labelClassName={styles.textFieldLabel}
                                                    label='Password Retype:' 
                                                    name='retypedPassword'/>
                                </div>
                                <div className={styles.fieldWrapper}>
                                    <NumberField labelClassName={styles.textFieldLabel} 
                                                label='Number:' 
                                                name='numberWithoutCode' 
                                                type='number'>
                                            <input type="text" name="phoneNumber"/>
                                    </NumberField>
                                </div>
                                <div className={styles.fieldWrapper}>
                                    <CountrySelectField labelClassName={styles.textFieldLabel}
                                                        label='Country:' 
                                                        name='country'
                                                        countryTouched={countryTouched}/>
                                </div>
                                <div className={styles.fieldWrapper}>
                                    <TextField labelClassName={styles.textFieldLabel} 
                                                label='Birth date:' 
                                                name='birthDate' 
                                                type='date'/>
                                </div>
                                <div className={styles.fieldWrapper}>
                                    <RadioGroupField labelClassName={`${styles.textFieldLabel} ${styles.lastChildLabel}`}
                                                    label='Biological sex:' 
                                                    name='biologicalSex'>
                                        <input type="radio" id='Male' value='Male'/>
                                        <input type="radio" id='Female' value='Female'/>
                                    </RadioGroupField>
                                </div>
                                <Button type="submit" disabled={isPending}>{isPending ? 'Loading...' : 'Register'}</Button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}