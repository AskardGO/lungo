import React, { useEffect, useState } from "react";
import styles from './Header.module.scss'
import { NavigationItems } from "./NavigationItems/NavigationItems";
import { NavLink, useNavigate, useNavigation, useLocation} from "react-router-dom";
import {Button} from "@mui/material";
import * as classNames from "classnames";
import {Translations} from "./Translations/Translations.tsx";

type HeaderType = {
    
}

const GoHomeButton = () => {
    return(
       <NavLink to="/">
                    HOME
                </NavLink>)
}

export const Header: React.FC<HeaderType> = () => {

    const [isHome, setIsHome] = useState(false)
    const {pathname} = useLocation();

    useEffect(() => {
        setIsHome(pathname === '/')    
    }, [pathname])

    useEffect(() => {
        console.log(isHome);
    }, [isHome])

    return(
        <div className={styles.container}> 
            <div className={styles.containerAdditional}>
                {
                    !isHome && <GoHomeButton/>
                }
            </div>
            <div className={styles.containerNav}>
                <NavigationItems selectedPath={pathname} isHome={isHome}/>
            </div>
            <div className={classNames(styles.containerAdditional, styles.containerTraslation)}>
                <Translations/>
            </div>
        </div>
    )
}