import { PropsWithChildren } from "react";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";

export default function SiteLayout ({children} : PropsWithChildren<unknown>) {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}