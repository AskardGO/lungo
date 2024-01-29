import React, {useCallback} from "react";
import {Button, ButtonGroup} from "@mui/material";

export const Translations = () => {

    const translations = [
        'IT', 'EN', 'DE', 'UK'
    ]

    const updateTranslation = useCallback((lang: string) => {
        console.log(lang)
    }, [])

    return translations.map((translation, index) => <Button key={translation + '-lang'} onClick={() => updateTranslation(translation)}>
        {translation}
    </Button>)
}