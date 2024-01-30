import React, { useEffect } from 'react';
import {a, useSpring, SpringProps} from "@react-spring/web";
import { NavLink } from 'react-router-dom';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const GoHomeButton = ({isHome}: {isHome: boolean}) => {

    const [buttonProps, buttonApi] = useSpring(() =>  ({
        opacity: 1,
        pointerEvents: 'unset',
        reverse: isHome,
        from: { opacity: 0, pointerEvents: 'none' },
        leave: {
            opacity: 0,
            delay: 300
        },
        config: {
            duration: 300
        }
    }), [isHome])

    useEffect(() => {
        buttonApi.start();
    }, [isHome]);

    return <a.div style={buttonProps as React.HTMLAttributes<SpringProps>}>
        <NavLink to="/">
            <ArrowBackIcon/>
        </NavLink>
    </a.div>

};

export default GoHomeButton;