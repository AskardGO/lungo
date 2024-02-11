import React from "react";
import styles from './ContentWrapper.module.scss'

type ContentWrapperProps = {
    children: React.ReactNode
}

export const ContentWrapper: React.FC<ContentWrapperProps> = ({children}) => {
    return(<div className={styles.wrapper}>
        { children }
    </div>)
}