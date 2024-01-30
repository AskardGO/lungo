import React, { useEffect, useState } from "react";
import styles from './Header.module.scss'
import { NavigationItems } from "./NavigationItems/NavigationItems";
import { useLocation } from "react-router-dom";
import { Translations } from "./Translations/Translations.tsx";

import GoHomeButton from "./GoHomeButton/GoHomeButton.tsx";

export const Header: React.FC = () => {

    const [isHome, setIsHome] = useState(false)
    const {pathname} = useLocation();

    useEffect(() => {
        setIsHome(pathname === '/')    
    }, [pathname])

    return(
        <div className={styles.container}> 
            <div className={styles.containerAdditional}>
                <GoHomeButton isHome={isHome}/>
            </div>
            <div className={styles.containerNav}>
                <NavigationItems selectedPath={pathname} isHome={isHome}/>
            </div>
            <div className={`${styles.containerAdditional} ${styles.containerTraslation}`}>
                <Translations/>
            </div>
        </div>
    )
}