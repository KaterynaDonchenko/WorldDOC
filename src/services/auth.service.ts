import { axiosClassic } from "@/api/interceptors";
import { IAuthResponse, IUserForm, TypeIUser } from "@/types/auth.types";
import { removeFromStore, saveTokenStore } from "./auth-token.service";
import { EnumAuth } from "@/Enums/enum-auth";


class AuthService {

    async main(type: EnumAuth, data: IUserForm | TypeIUser) {
        const response = await axiosClassic.post<IAuthResponse>(
            `auth/${type}`,
            data
        )
        
        if (response.data.accessToken) saveTokenStore(response.data.accessToken)

        return response
    }

    async getNewToken() {
        const response = await axiosClassic.post<IAuthResponse>(
            'auth/login/access-token'
        )

        if (response.data.accessToken) saveTokenStore(response.data.accessToken)

        return response
    }

    async logout() {
        const response = await axiosClassic.post<boolean>('auth/logout')

        if(response.data) removeFromStore()

        return response
    }
}

export const authService = new AuthService()

