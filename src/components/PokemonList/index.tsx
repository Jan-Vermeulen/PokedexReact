import React from 'react'
import { useSelector } from 'react-redux'
import { createUseStyles } from 'react-jss'

import { Grid } from '@material-ui/core'

import { getLocale } from '../../state/selectors'
import PokemonCard from '../PokemonCard'
import pokemons from './utils/mockedPokemonList/pokemons.json'

import styles from './style'

const PokemonList = () => {
    const useStyles = createUseStyles(styles)
    const classes = useStyles()
    const locale = useSelector(getLocale)

    return (
        <Grid container className={classes.container}>
            {pokemons.map(e => (
                <Grid item xs={6} sm={4} md={3}>
                    <PokemonCard
                        //@ts-ignore
                        name={e.names[locale]}
                        image={e.image}
                        type={e.types}
                        number={e.id}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default PokemonList
