'use client';

import { PropsWithChildren } from "react";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { QueryProvider } from "../../app/providers";

export default function SiteLayout ({children} : PropsWithChildren) {
    return (
        <QueryProvider>
            <Header/>
            {children}
            <Footer/>
        </QueryProvider>
    )
}