import React, {useEffect, useLayoutEffect, useRef} from "react";
import styles from './Header.module.scss';
import { NavigationItems } from "./NavigationItems/NavigationItems";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Translations } from "./Translations/Translations.tsx";
import GoHomeButton from "./GoHomeButton/GoHomeButton.tsx";
import { a, useSpring, useSpringRef } from "@react-spring/web";

export const Header: React.FC = () => {
    const textRef = useSpringRef();
    const textBoxRef = useSpringRef();
    const { pathname } = useLocation();
    const nav = useNavigate();

    const isHome = pathname === '/';
    const isAnimationPlayed = useRef(false);

    const [titleBoxProps, titleBoxApi] = useSpring(() => ({
        ref: textBoxRef,
        reverse: !isHome,
        config: { duration: 300 },
    }));

    const [titleProps, titleApi] = useSpring(() => ({
        ref: textRef,
        reverse: !isHome,
        config: { duration: 200 },
    }));

    const handleEscape = () => {
        if (isHome) {
            nav("/");
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleEscape, false);
        return () => document.removeEventListener("keydown", handleEscape, false);
    }, [nav]);

    useLayoutEffect(() => {
        // Setup animation
        titleApi.start({
            to: {
                opacity: isHome ? 0 : 1,
                scale: isHome ? 0.9 : 1,
            },
            config: { duration: 200 },
        });

        titleBoxApi.start({
            to: {
                height: isHome ? 0 : 60,
            },
            config: { duration: 200 },
        });
    }, []);

    useEffect(() => {

        if (!isAnimationPlayed.current) {
            isAnimationPlayed.current = true;
            return;
        }

        setTimeout(() => {
            titleApi.start({
                to: {
                    opacity: !isHome ? 1 : 0,
                    scale: !isHome ? 1 : 0.9,
                },
                config: { duration: 200 },
            });
        }, isHome ? 200 : 300);

        setTimeout(() => {
            titleBoxApi.start({
                to: {
                    height: isHome ? 0 : 60,
                },
                config: { duration: 200 },
            });
        }, isHome ? 300 : 200);

    }, [isHome, titleProps, titleBoxProps]);

    return (
        <div className={styles.header}>
            <a.div style={titleBoxProps} className={`${styles.headerTitle} ${!isHome && styles.headerTitle_full}`}>
                <NavLink to={'/'}>
                    <a.div style={titleProps}>
                        <h3>
                            lunga la notte
                        </h3>
                    </a.div>
                </NavLink>
            </a.div>
            <div className={styles.container} style={{ margin: isHome ? '0.2rem 0' : '1rem 0' }}>
                <div style={{ position: 'relative' }} className={styles.containerAdditional}>
                    <GoHomeButton isHome={isHome} />
                </div>
                <div className={styles.containerNav} style={{ margin: isHome ? 'inherit' : 0 }}>
                    <NavigationItems selectedPath={pathname} isHome={isHome} />
                </div>
                <div className={`${styles.containerAdditional} ${styles.containerTraslation}`}>
                    <Translations isHome={isHome} />
                </div>
            </div>
        </div>
    );
};
