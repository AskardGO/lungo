import React, {useEffect, useState} from "react"
import styles from './TopSection.module.scss'
import {useSpring, a, easings} from "@react-spring/web";

type TopSectionProps = {
    animationStatus: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}
export const TopSection: React.FC<TopSectionProps> = ({animationStatus}) => {

    const [isBrandAnimationStarted, setIsBrandAnimationStarted] = useState(false);
    const [isAnimationPlayed, setIsAnimationPlayed] = animationStatus

    const [bgprops, bgApi] = useSpring(() => ({
        transform: "scale(1)",
    }), [isAnimationPlayed]);
    const [brandprops, brandApi] = useSpring(() => ({
        transform: "scale(1)",
        opacity: 1
    }));

    useEffect(() => {
        playAnimation();
    }, []);

    const playAnimation = () => {
        if(!isAnimationPlayed) {
            bgApi.start({
                from: {
                    transform: "scale(1.1)"
                },
                to: {
                    transform: "scale(1)"
                },
                config: {
                    duration: 15500
                },
                onStart: () => {
                    setIsAnimationPlayed(true)
                }
            });

            brandApi.start({
                from: {
                    transform: "scale(1.1)",
                    opacity: 0
                },
                to: {
                    transform: "scale(1)",
                    opacity: 1
                },
                config: {
                    duration: 3800,
                    easing: easings.easeOutCirc,
                },
                delay: 1500
            })

        }
    }

    useEffect(() => {
        localStorage.setItem("main_animation_played", JSON.stringify(isAnimationPlayed))
    }, [isAnimationPlayed]);

    return (
        <div className={styles.wrapper}>
            <a.div style={bgprops} className={styles.container}>
                <div className={styles.containerImage}>
                    <img src="background.webp" alt="Background" />
                </div>
            </a.div>
            <a.div style={brandprops} className={styles.containerBrand}>
                <img src="brand.webp" alt="Brand"/>
            </a.div>
        </div>

    );
}