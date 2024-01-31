import React, { useEffect, useState } from "react";
import styles from './Header.module.scss'
import { NavigationItems } from "./NavigationItems/NavigationItems";
import {NavLink, useLocation} from "react-router-dom";
import { Translations } from "./Translations/Translations.tsx";

import GoHomeButton from "./GoHomeButton/GoHomeButton.tsx";
import {a, useSpring} from "@react-spring/web";

export const Header: React.FC = () => {

    const [isHome, setIsHome] = useState(false)
    const [titleProps, titleApi] = useSpring(() => ({
        to: { height: !isHome ? 'auto' : 0, opacity: !isHome ? 1 : 0, scale: !isHome ? '1.1' : '1' },
        reverse: isHome,
        config: {
            duration: 600
        },
    }), [isHome]);
    const {pathname} = useLocation();

    useEffect(() => {
        setIsHome(pathname === '/')    
    }, [pathname])

    return(
        <div className={styles.header}>
                <a.div style={titleProps} className={styles.headerTitle}>
                    <NavLink to={'/'}>
                        <h3>
                            lunga la notte
                        </h3>
                    </NavLink>
                </a.div>
            <div className={styles.container} style={{margin: `${isHome?.2:1}rem 0`}}>
                <div style={{position: 'relative'}} className={styles.containerAdditional}>
                    <GoHomeButton isHome={isHome}/>
                </div>
                <div className={styles.containerNav} style={{margin: isHome ? 'inherit' : 0}}>
                    <NavigationItems selectedPath={pathname} isHome={isHome}/>
                </div>
                <div className={`${styles.containerAdditional} ${styles.containerTraslation}`}>
                    <Translations isHome={isHome}/>
                </div>
            </div>
        </div>

    )
}