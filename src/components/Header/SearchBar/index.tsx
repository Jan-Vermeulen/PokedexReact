import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUseStyles } from 'react-jss'
import { TextField } from '@material-ui/core'

import { SetSearchText } from '../../../state/actions'

import styles from './style'

const SearchBar = () => {
    const useStyles = createUseStyles(styles)
    const classes = useStyles({})
    const dispatch = useDispatch()

    const [value, setValue] = useState('')
    const onChange = (textFieldValue: string) => {
        setValue(textFieldValue)
        dispatch(SetSearchText(textFieldValue))
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
                variant="outlined"
            />
        </div>
    )
}

export default SearchBar
