import React, { useEffect } from 'react'
import styles from './ContentWrapperScroll.module.scss'
import {RemoveScroll} from "react-remove-scroll";

type ContentWrapperScrollType = {
    children: React.ReactNode[] | React.ReactNode
}
export const ContentWrapperScroll: React.FC<ContentWrapperScrollType> = ({children}) => {

    return (
        <RemoveScroll className={styles.wrapper} enabled removeScrollBar={false}>
            {children}
        </RemoveScroll>
    )
}