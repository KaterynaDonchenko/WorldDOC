import { axiosWithAuth } from "@/api/interceptors"
import { IUser } from "@/types/auth.types"

class UserService {
    private BASE_URL = '/user/profile'

    async  getProfile() {
        const response = await axiosWithAuth.get<IUser>(this.BASE_URL)
        return response.data
    }

    async update(data: IUser) {
        const response = await axiosWithAuth.put(this.BASE_URL, data)
        return response.data
    }
}

export const userService = new UserService()