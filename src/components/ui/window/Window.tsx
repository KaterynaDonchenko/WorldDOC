import type { HTMLAttributes, PropsWithChildren } from "react";

import styles from './Window.module.scss'

type TypeWindow = HTMLAttributes<HTMLDivElement>


export function Window({children, className, ...rest}: PropsWithChildren<TypeWindow>) {
    return (
        <div className={`${className} ${styles.window}`}
            {...rest}
        >
            {children}
        </div>
    )
}