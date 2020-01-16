import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { TextField } from '@material-ui/core'

import styles from './style'

const SearchBar = () => {
    const useStyles = createUseStyles(styles)
    const classes = useStyles({})

    const [value, setValue] = useState('')
    const onChange = (textFieldValue: string) => {
        setValue(textFieldValue)
    }
    return (
        <div>
            <TextField
                InputProps={{
                    classes: {
                        root: classes.input,
                        focused: classes.inputFocused,
                    },
                }}
                classes={{ root: classes.root }}
                placeholder="Entrez un nom de Pokemon"
                value={value}
                onChange={e => {
                    onChange(e.target.value)
                }}
            />
        </div>
    )
}

export default SearchBar
