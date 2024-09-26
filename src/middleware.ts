import { DASHBOARD_PAGES } from "@/config/pages-url.config";
import { EnumTokens } from "@/Enums/enum-tokens";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(
    request: NextRequest,
    response: NextResponse
) {
    const {url, cookies} = request

    console.log(url, cookies)

    const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value

    const isAccountPage = url.includes('/account')
    const isLoginPage = url.includes('/login')

    if(isLoginPage && refreshToken) {
        return NextResponse.redirect(new URL(DASHBOARD_PAGES.HOME, url))
    }

    if(isLoginPage) {
        return NextResponse.next()
    }

    if (isAccountPage) {
        return NextResponse.redirect(new URL('/page404', request.url))
    }

    if(!refreshToken) {
        return NextResponse.redirect(new URL('/login', request.url)) 
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/account/:path*', '/login/:path']
}