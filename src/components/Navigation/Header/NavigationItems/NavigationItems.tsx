import React, {useCallback, useEffect, useMemo} from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import styles from './NavigationItems.module.scss'

type NavigationItemsProps = {
    isHome: boolean
    selectedPath: string
}

export const NavigationItems: React.FC<NavigationItemsProps> = ({isHome, selectedPath}) => {

    const {t, i18n} = useTranslation()

    const generateItems = useCallback(() => [
        {
            href: '/about',
            title: t('navigation.about')
        },
        {
            href: '/contact',
            title: t('navigation.contact')
        },
        {
            href: '/menu',
            title: t('navigation.menu')
        },
        {
            href: '/gallery',
            title: t('navigation.gallery')
        }
    ], [t]);

    const Items = useMemo(() => {
        return(
            <nav className={styles.container}>
                {
                    generateItems().map((i, index) => (
                        <NavLink key={index + '-nav_item'} style={{fontWeight: selectedPath === i.href ? 700 : 500, color: isHome ? '#fff' : '#000'}} to={i.href}>
                            { i.title }
                        </NavLink>
                    ))
                }
            </nav>
        )
    }, [isHome, selectedPath, i18n.language])

    return Items

}