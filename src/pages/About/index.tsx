import React from 'react';
import {useTranslation} from "react-i18next";

import { LazyLoadImage } from 'react-lazy-load-image-component';

import styles from './About.module.scss'
import {ImageWithText} from "../../components/ImageWithText/ImageWithText.tsx";
import {ContentWrapperScroll} from "../../components/ContentWrapperScroll";
import DynamicCard from "../../components/DynamicCard";
export const About: React.FC = () => {

    const {t} = useTranslation()

    return (
        <div className={styles.container}>

            <ImageWithText text={t('navigation.about')} src='team_header.jfif' navAlt='about'/>

            <div className={styles.containerHeader}>
                <div className={styles.containerHeaderPhoto}>
                    <LazyLoadImage loading='lazy' alt='boss' src="boss.webp"/>
                </div>
                <div className={styles.containerHeaderMsg}>
                    <span>
                        { t('about.message') }
                    </span>
                    <span>
                        { t('about.message') }
                    </span>
                </div>
            </div>

            <div className={styles.containerGallery}>
                <DynamicCard w={301} h={262} imgSrc="about/1.jfif" imgAlt="Gallery item 1"/>
                <DynamicCard w={301} h={262} imgSrc="about/2.jfif" imgAlt="Gallery item 2"/>
                <DynamicCard w={301} h={262} imgSrc="about/3.jfif" imgAlt="Gallery item 3"/>
            </div>

            <div className={styles.containerFooter_gallery}>
                <DynamicCard w={353} h={435} imgSrc="about/cheff.jfif" imgAlt="Gallery item 1"/>
                <DynamicCard w={353} h={435} imgSrc="about/boss.jfif" imgAlt="Gallery item 1"/>
            </div>

        </div>
    );
};