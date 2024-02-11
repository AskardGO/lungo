import React from "react";
import styles from './ImageWithText.module.scss'

type ImageWithTextProps = {
    src: string,
    text: string,
    navAlt: string
}

export const ImageWithText: React.FC<ImageWithTextProps> = ({src, text, navAlt}) => {
    return(
        <div className={styles.container}>
            <img src={src} alt={`${navAlt} image`} />
            <h2>
                { text }
            </h2>
            <div className={styles.underline}/>
        </div>
    )
}