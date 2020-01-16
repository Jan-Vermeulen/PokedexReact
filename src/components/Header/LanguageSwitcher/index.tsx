import React, { useState } from 'react'
import { Select, MenuItem } from '@material-ui/core'
import { createUseStyles } from 'react-jss'

import styles from './style'

const LanguageSwitcher = () => {
    const locales = { fr: 'fr', en: 'en', jp: 'jp' }
    const [locale, setLocale] = useState<string>('fr')
    const useStyles = createUseStyles(styles)
    const classes = useStyles({})
    const onChange = (value: string) => {
        setLocale(value)
    }

    return (
        <Select
            classes={{ root: classes.switcher }}
            id="demo-simple-select-disabled"
            value={locale}
            onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
                onChange(e.target.value as string)
            }
        >
            <MenuItem value={locales.fr}>FR</MenuItem>
            <MenuItem value={locales.en}>EN</MenuItem>
            <MenuItem value={locales.jp}>JP</MenuItem>
        </Select>
    )
}
export default LanguageSwitcher
