import React, {useEffect, useMemo, useState} from "react";
import styles from "../../pages/Gallery/Gallery.module.scss";
import {ReactMinimalGallery} from "react-minimal-gallery";

type GalleryModuleProps = {
    imageList: string[]
}
export const GalleryModule: React.FC<GalleryModuleProps> = ({imageList}) => {

    const [response, setResponse] = useState({
        w: 0,
        h: 0
    })

    useEffect(() => {
        const updateScreenSize = () => {
            setResponse({w: window.innerWidth, h: window.innerHeight});
        };
        updateScreenSize();

        window.addEventListener('resize', updateScreenSize);

        return () => {
            window.removeEventListener('resize', updateScreenSize);
        };

    }, []);

    const gallery = useMemo(() => <ReactMinimalGallery
        images={imageList}
        width={response.w / 1.5}
        height={response.h / 2}
        thumbnailWidth={100}
        hoverColor="#b19364"
        paginationColor="#643e18"
    />, [imageList, response.w])

    return imageList.length ?
        <div className={styles.container}>
            {gallery}
        </div> : undefined
}