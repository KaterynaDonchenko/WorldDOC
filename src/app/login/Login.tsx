'use client'

import { useRegister } from "@/hooks/useRegister";
import { useState, useEffect } from "react";
import { Formik, Form, FormikProps, FormikHelpers } from "formik";
import * as Yup from 'yup'

import { Title } from "@/components/ui/title/Title"
import { Window } from "@/components/ui/window/Window";
import { TextField } from "@/components/ui/fields/textField/TextField";
import { PasswordField } from "@/components/ui/fields/passwordField/PasswordField";
import { Button } from "@/components/ui/button/Button";
import { CustomLink } from "@/components/ui/link/CustomLink";

import { IUserForm } from "@/types/auth.types";
import { EnumAuth } from "@/Enums/enum-auth";

import styles from './Login.module.scss';
export function Login() {
    const { mutate, isSuccess} = useRegister(EnumAuth.LOGIN )
    const [ actions, setActions ] = useState<FormikHelpers<IUserForm>>()

    useEffect(() => {
        if (isSuccess && actions) actions.resetForm()
    }, [isSuccess])

    const postUserForm = (values: IUserForm, actions: FormikHelpers<IUserForm>) => {
        mutate(values)
        setActions(actions)
    }

    return (
        <div className={styles.login}>
            <Title>Welcome to WoldDOC</Title>
            <Window className={styles.window}>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={ Yup.object({
                        email: Yup.string()
                                  .email('Must be email')
                                  .required('Required'),
                        password: Yup.string()
                                     .min(8, 'Must be 8 characters or more')
                                     .matches(/(?=.*[0-9])/, 'Password must contain at least one number')  
                                     .matches(/(?=.*[A-Z])/, 'Password must contain at least one uppercase letter')  
                                     .matches(/(?=.*[a-z])/, 'Password must contain at least one lowercase letter')  
                                     .matches(/(?=.*[!@#$%^&*-+=&~`.,?/])/, 'Password must contain at least one special character')
                                     .required('Required')
                    })}
                    onSubmit={(values, actions) => {
                        postUserForm(values, actions)
                    }}
                >
                    {(props: FormikProps<IUserForm>) => (
                        <Form>
                            <div className={styles.fieldWrapper}>
                                <TextField label='Email' name='email' type='text'/>
                            </div>
                            <div className={styles.fieldWrapper}>
                                <PasswordField  label='Password' name='password'/>
                            </div>
                            <Button type='submit'>Log in</Button>
                        </Form>
                    )}
                </Formik>
                <CustomLink href='/reset-password' className={styles.link}>Reset Password</CustomLink>
                <div className={styles.register}>
                    Don't have an account?
                    <CustomLink href='/register' className={styles['register-link']}>Sing up</CustomLink>
                </div>
            </Window>
        </div>
    )
}