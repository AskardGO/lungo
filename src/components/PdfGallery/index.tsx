import React, {useEffect, useState} from "react";
import { Document, Page } from 'react-pdf';
import {Badge, Button} from "@mui/material";
import {ArrowBackIos, ArrowForwardIos, TrendingFlat} from '@mui/icons-material';

import styles from './PdfGallery.module.scss';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';


type PdfGalleryProps = {

}

export const PdfGallery: React.FC<PdfGalleryProps> = () => {

    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    }

    const prev = () => {
        if(pageNumber <= 1 ) return
        setPageNumber((v) => v - 1)
    }

    const next = () => {
        if(numPages && pageNumber >= numPages) return
        setPageNumber((v) => v + 1)
    }

    const handleKeyDown = (event: KeyboardEvent) => {
        switch (event.key) {
            case "ArrowLeft":
                prev();
                break;
            case "ArrowRight":
                next();
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };

    }, [pageNumber, numPages]);

    return (
        <div className={styles.container}>
            <div className={styles.containerControlls}>
                <Badge badgeContent={<TrendingFlat sx={{transform: 'rotate(180deg)'}}/>} color="info">
                    <Button variant='contained' onClick={prev}>
                        <ArrowBackIos/>
                    </Button>
                </Badge>
                <div className={styles.counter}>
                    { pageNumber } / { numPages }
                </div>
                <Badge badgeContent={<TrendingFlat/>} color="info">
                    <Button variant='contained' onClick={next}>
                        <ArrowForwardIos/>
                    </Button>
                </Badge>
            </div>
            <Document file="menu.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
        </div>
    )
}