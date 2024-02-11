import React from "react";
import styles from './Contact.module.scss'
import {ImageWithText} from "../../components/ImageWithText/ImageWithText.tsx";
import {useTranslation} from "react-i18next";

export const Contact = () => {

    const {t} = useTranslation()

    return(
        <div className={styles.container}>

            <ImageWithText text={t('navigation.contact')} src='contact_food.webp' navAlt='contact'/>

            <div className={styles.containerData}>
                <div className={styles.containerDataCol}>
                    <span className={`${styles.textTitle} ${styles.textBold} ${styles.textLp}`}> {t('navigation.contact')} </span>
                    <span className={styles.textSecondary}>
                        <a href="https://maps.google.com/?q=Residenzstraße%201280333%20Munich" target="_blank" rel="noopener noreferrer">
                           Residenzstraße 1280333 Munich
                        </a>
                    </span>
                    <div className={styles.textCol}>
                        <span className={`${styles.textTitle} ${styles.textBold} ${styles.textLp}`}> {t('contact.phone_number')} </span>
                        <span className={styles.textSecondary} datatype="phone">
                            <a href="tel:+491056270343" className={styles.textSecondary} datatype="phone">
                                49 1056270343
                            </a>
                        </span>
                    </div>
                </div>
                <div className={styles.containerDataCol}>
                    <span className={`${styles.textTitle} ${styles.textBold}`}> {t('contact.time')} </span>
                    <div className={styles.textCol}>
                        <span className={styles.textSecondary}> {t('contact.work_days')} </span>
                        <span className={`${styles.textSecondary} ${styles.textBold}`}> 11:00 to 23:00 </span>
                    </div>
                    <div className={styles.textCol}>
                        <span className={styles.textSecondary}> {t('contact.saturday_from')} </span>
                        <span className={`${styles.textSecondary} ${styles.textBold}`}> 15:00 to 00:00 </span>
                    </div>
                    <span className={`${styles.textTitle} ${styles.textBold}`}> {t('contact.weekend')} </span>
                </div>
            </div>

        </div>
    )
}