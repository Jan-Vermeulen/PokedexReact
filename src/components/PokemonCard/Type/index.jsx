import React from 'react'
import { createUseStyles } from 'react-jss'

import colorTypes from '../../PokemonList/utils/mockedPokemonList/colorFromTypes'
import styles from './style'

// type Props = {
//     type: string
// }

const Type = props => {
    const { type } = props

    const useStyles = createUseStyles(styles)
    const classes = useStyles()

    return (
        <span
            className={classes.container}
            style={{ backgroundColor: colorTypes[type] }}
        >
            {type.toUpperCase()}
        </span>
    )
}
export default Type
