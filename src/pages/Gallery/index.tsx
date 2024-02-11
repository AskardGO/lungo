import React, {useEffect, useMemo, useState} from "react";
import {ReactMinimalGallery} from "react-minimal-gallery";

import styles from './Gallery.module.scss'
import {GalleryModule} from "../../components/GalleryModule";

export const Gallery = () => {

    const [imageList, setImageList] = useState<string[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const files = await import.meta.glob('/public/gallery_files/*.*');
                const imageNames = Object.keys(files).map((key) => key.replace('/public/', ''));
                setImageList(imageNames);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

    return imageList.length ?
        <div className={styles.container}>
            <GalleryModule imageList={imageList}/>
        </div> : undefined
}