import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styles from './Button.module.scss'

type TypeButton = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({children, className = styles.button, ...rest}: PropsWithChildren<TypeButton>) {
	return (
		<button
			className={className}
			{...rest}
		>
			{children}
		</button>
	)
}