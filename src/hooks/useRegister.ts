import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/auth.service";
import { toast } from "sonner";

import { IUserForm, TypeIUser } from "@/types/auth.types";
import { EnumAuth } from "@/Enums/enum-auth";
import { DASHBOARD_PAGES } from "@/config/pages-url.config";


export function useRegister(type: EnumAuth) {
    const { push } = useRouter()

    const { data, mutate, isPending, isSuccess, isError } = useMutation({
        mutationKey: ['register'], 
        mutationFn: (value: IUserForm | TypeIUser) => authService.main(type, value),
        onSuccess() {
            toast.success(`Successful ${type}`)
            push(DASHBOARD_PAGES.HOME)
        }
    })

    return { data, mutate, isPending, isSuccess, isError}
}
