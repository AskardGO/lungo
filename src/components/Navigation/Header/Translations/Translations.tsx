import React, {useCallback, useEffect, useMemo} from "react";
import {Button, ButtonGroup} from "@mui/material";
import {useTranslation} from "react-i18next";

export const Translations = () => {

    const {i18n} = useTranslation()

    const translations = [
        'IT', 'EN', 'DE', 'UK'
    ]

    const updateTranslation = useCallback((lang: string) => {
        i18n.changeLanguage(lang.toLowerCase())
            .then(() => {
                localStorage.setItem('localization', lang.toLowerCase())
            })
            .catch((err) => {
                alert(err)
            })
    }, [])

    const translationItems = useMemo(
        () => translations.map((translation, index) => {

            const isSelected = translation.toLowerCase() === i18n.language

            return <Button
                key={translation + '-lang'}
                onClick={() => updateTranslation(translation)}
            >
                <span style={{fontWeight: isSelected ? 800 : 300, fontSize: isSelected ? '.9rem' : '.8rem'}}>
                    {translation}
                </span>
            </Button>
        })
        , [i18n.language])

    return translationItems
}