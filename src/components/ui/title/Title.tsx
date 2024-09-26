import type { PropsWithChildren, HTMLAttributes } from "react";
import styles from './Title.module.scss'

type TypeHeading = HTMLAttributes<HTMLHeadingElement>;

export function Title({children, className = styles.title , ...rest}: PropsWithChildren<TypeHeading>) {
    return (
        <h1
            className={className}
            {...rest}
        >
            {children}
        </h1>
    )
}