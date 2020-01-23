import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { createUseStyles } from 'react-jss'
import { useSelector } from 'react-redux'

import HeightIcon from '@material-ui/icons/Height'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import { getLocale } from '../../state/selectors'
import pokemons from '../PokemonList/utils/mockedPokemonList/pokemons.json'

import styles from './style'

const PokemonDetails = props => {
    const useStyles = createUseStyles(styles)
    const classes = useStyles()
    const params = useParams()
    const locale = useSelector(getLocale)

    const pokemon = pokemons.filter(
        p => p.id.toString() === params.id || params.name
    )[0]
    const pokemonWeight =
        locale === 'fr'
            ? ` Poids : ${Math.round(pokemon.weight * 0.453592 * 100) / 100} Kg`
            : ` Weight: ${pokemon.weight} Lbs`

    const pokemonHeight =
        locale === 'fr'
            ? ` Taille : ${Math.round(pokemon.height * 10)} Cm`
            : ` Height: ${Math.round((pokemon.height / 3.09) * 100) / 100} Ft`
    return (
        <div className={classes.container}>
            <div className={classes.detailsContainer}>
                <img
                    className={classes.image}
                    src={pokemon.image}
                    alt={pokemon.names[locale]}
                />
                <div className={classes.details}>
                    <span className={classes.icon}>
                        <HeightIcon />
                    </span>
                    <span>{pokemonHeight}</span>
                </div>
                <div className={classes.details}>
                    <span className={classes.icon}>
                        <FitnessCenterIcon />
                    </span>
                    <span className={classes.weight}>{pokemonWeight}</span>
                </div>
                <div>
                    <Link to="/">
                        <ArrowBackIcon className={classes.backArrow} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PokemonDetails
