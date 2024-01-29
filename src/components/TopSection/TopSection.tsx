import React, {useEffect, useState} from "react"
import styles from './TopSection.module.scss'
import {useSpring, a, easings} from "@react-spring/web";

export const TopSection: React.FC = () => {

    const [isBrandAnimationStarted, setIsBrandAnimationStarted] = useState(false)
    const [bgprops] = useSpring(() => ({
        transform: "scale(1)",
        delay: 800,
        onChange: (result) => {
            const status = parseFloat(result.value.transform.match(/\d+/g)[1].slice(0, 1) + '.' + result.value.transform.match(/\d+/g)[1].slice(1, 4));
            if(status < 0.8 && !isBrandAnimationStarted) {
                setIsBrandAnimationStarted(true)
            }
        },
        from: {
            transform: "scale(1.1)"
        },
        config: {
            duration: 15500,
            easing: easings.easeOutCirc,
        }
    }));

    const [brandprops] = useSpring(() => ({
        transform: "scale(1)",
        opacity: 1,
        delay: 1500,
        from: {
            transform: "scale(1.1)",
            opacity: 0
        },
        config: {
            duration: 3800,
            easing: easings.easeOutCirc,
        }
    }));

    return (
        <>
            <a.div style={bgprops} className={styles.container}>
                <div className={styles.containerImage}>
                    <img src="background.webp" alt="Background" />
                </div>
            </a.div>
            <a.div style={brandprops} className={styles.containerBrand}>
                <img src="brand.webp" alt="Brand"/>
            </a.div>
        </>

    );
}