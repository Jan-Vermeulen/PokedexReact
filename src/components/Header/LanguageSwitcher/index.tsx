import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { useDispatch } from 'react-redux'
import { SetLocale } from '../../../state/actions'
import { Select, MenuItem } from '@material-ui/core'

import styles from './style'

const LanguageSwitcher = () => {
    const useStyles = createUseStyles(styles)
    const classes = useStyles()
    const dispatch = useDispatch()

    const [selectedLanguage, setSelectedLanguage] = useState('fr')

    const onChange = (locale: string) => {
        dispatch(SetLocale(locale))
        setSelectedLanguage(locale)
    }

    return (
        <div className={classes.container}>
            <Select
                classes={{
                    select: classes.select,
                    icon: classes.icon,
                }}
                inputProps={{ classes: { underline: classes.underline } }}
                labelId="Language Selection"
                id="language-selection"
                value={selectedLanguage}
                onChange={(e: any) => onChange(e.target.value)}
            >
                <MenuItem value="fr">French</MenuItem>
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="ja">Japanese</MenuItem>
            </Select>
        </div>
    )
}

export default LanguageSwitcher
