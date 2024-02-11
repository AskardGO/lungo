import React, { useEffect, useRef, useState } from "react";
import styles from './DynamicCard.module.scss';

type DynamicCardProps = {
    imgSrc: string;
    imgAlt: string;
    w: number;
    h: number;
};

const DynamicCard: React.FC<DynamicCardProps> = ({ imgAlt, imgSrc, w, h }) => {
    const [isOnDiv, setIsOnDiv] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const reflejoRef = useRef<HTMLDivElement>(null);
    const capaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseEnter = () => {
            setIsOnDiv(true);
        };

        const handleMouseLeave = () => {
            setIsOnDiv(false);
        };

        const handleMouseMove = (e: MouseEvent) => {

            const transformCardBack = 'translateY(' + 0 + 'px) rotateX(' + 0 + 'deg) rotateY(' + 0 + 'deg)';
            const transformCapaBack = 'translateX(' + 0 + 'px) translateY(' + 0 + 'px)';

            if(isOnDiv) {
                const mx = e.pageX;
                const my = e.pageY;
                const w = window.innerWidth;
                const h = window.innerHeight;

                const offsetX = 0.5 - mx / w;
                const offsetY = 0.5 - my / h;
                const dy = my - h / 2;
                const dx = mx - w / 2;
                const theta = Math.atan2(dy, dx);

                const angle = (theta * 180) / Math.PI - 90;

                const transformCard =
                    'translateY(' + -offsetX * 18 + 'px) rotateX(' + -offsetY * 18 * 3 + 'deg) rotateY(' + offsetX * 18 * 3 + 'deg)';

                const transformReflejo = 'translateY(' + offsetY * 18 + 'px)';

                reflejoRef.current?.style.setProperty('background', 'linear-gradient(' + angle + 'deg, rgba(255,255,255,' + my / h * 0.5 + ') 0%,rgba(255,255,255,0) 90%)');
                reflejoRef.current?.style.setProperty('transform', transformReflejo);

                const transformCapa = 'translateX(' + offsetX * 0 + 'px) translateY(' + offsetY * 0 + 'px)';


                if (isOnDiv) {
                    cardRef.current?.style.setProperty('transform', transformCard);
                    capaRef.current?.style.setProperty('transform', transformCapa);
                }
            } else {
                cardRef.current?.style.setProperty('transform', transformCardBack);
                capaRef.current?.style.setProperty('transform', transformCapaBack);
            }
        };

        cardRef.current?.addEventListener('mouseenter', handleMouseEnter);
        cardRef.current?.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            cardRef.current?.removeEventListener('mouseenter', handleMouseEnter);
            cardRef.current?.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isOnDiv]);

    return (
        <div style={{width: `${w || 200}px`, height: `${h || 200}px`}} ref={cardRef} className={styles.card}>
            <div ref={capaRef} className={styles.cardBg}>
                <div className={styles.cardContent}>
                    <img src={imgSrc} alt={imgAlt}/>
                </div>
            </div>
            <div ref={reflejoRef} className={styles.reflejo}></div>
        </div>
    );
};

export default DynamicCard;
