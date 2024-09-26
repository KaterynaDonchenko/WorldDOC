import type { AnchorHTMLAttributes, PropsWithChildren } from "react";
import Link from "next/link";

type TypeLink = AnchorHTMLAttributes<HTMLAnchorElement>;

export function CustomLink({ children, className, href, ...rest }: PropsWithChildren<{href: string} & TypeLink>) {
    return (
        <Link href={href}
              className={className}
              {...rest}
         
        >
            {children}
        </Link>
    );
}