import { Metadata } from "next";

import { NO_INDEX_PAGE } from "@/constants/seo.constants";

export const metadata: Metadata = {
    title: "User's account",
     ...NO_INDEX_PAGE
};


export default function UserPage() {
    return (
        <div>Dashboard</div>
    )
}