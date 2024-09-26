import type { HTMLAttributes, PropsWithChildren } from "react";

type TypeWindow = HTMLAttributes<HTMLDivElement>


export function Window({children, className, ...rest}: PropsWithChildren<TypeWindow>) {
    return (
        <div className={className}
            {...rest}
        >
            {children}
        </div>
    )
}