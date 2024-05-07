import { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from "react";
import styles from './Button.module.css';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <button className={styles.button} {...props}>
            {children}
        </button>
    )
}