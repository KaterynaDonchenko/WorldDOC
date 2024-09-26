import { EnumBiologicalSex } from "@/Enums/enum-biologicalSex"

export interface IUserForm {
    email: string,
    password: string
}

export interface IUser {
    firstName: string,
    secondName: string,
    email: string,
    retypedEmail: string,
    password: string,
    retypedPassword: string,
    numberWithoutCode: string,
    phoneNumber: string,
    country: string,
    birthDate: string,
    biologicalSex: EnumBiologicalSex
}

export interface IAuthResponse {
    accessToken: string,
    user: IUser
}

export type TypeIUser = Omit<IUser, 'retypedEmail' | 'retypedPassword' | 'numberWithoutCode' >