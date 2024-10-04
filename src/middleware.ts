import { DASHBOARD_PAGES } from "@/config/pages-url.config";
import { EnumTokens } from "@/Enums/enum-tokens";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(
    request: NextRequest,
    response: NextResponse
) {
    const {url, cookies} = request

    const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value

    const isLoginPage = url.includes('/login')

    if(isLoginPage && refreshToken) {
        return NextResponse.redirect(new URL(DASHBOARD_PAGES.HOME, url))
    }

    if(isLoginPage) {
        return NextResponse.next()
    }

    if(!refreshToken) {
        return NextResponse.redirect(new URL('/login', request.url)) 
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/account/:path*', '/login/:path']
}