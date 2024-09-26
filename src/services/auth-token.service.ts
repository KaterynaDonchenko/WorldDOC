import { EnumTokens } from '@/Enums/enum-tokens'
import Cookies from 'js-cookie'

export const getAccessToken = () => {
    const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
    return accessToken || null
}

export const saveTokenStore = (accessToken: string) => {
    Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
        domain: 'localhost',
        sameSite: 'strict',
        expires: 1
    })
}

export const removeFromStore = () => {
    Cookies.remove(EnumTokens.ACCESS_TOKEN)
}