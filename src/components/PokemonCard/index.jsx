import React from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'

import Type from './Type'
import ColorTypes from '../PokemonList/utils/mockedPokemonList/colorFromTypes'
import styles from './style'

// type Props = {
//     name: string
//     number: number
//     type: string[]
//     image: string
//     className?: Record<string, string>
// }

const PokemonCard = props => {
    const { name, number, type, image } = props
    //@ts-ignore
    const useStyles = createUseStyles(styles)
    const classes = useStyles()
    const backgroundColor = `linear-gradient(-45deg, ${
        ColorTypes[type[0]]
    } 50%, ${ColorTypes[type[1]] || ColorTypes[type[0]]} 50%)`

    return (
        <Link className={classes.link} to={`/pokemon/${number}`}>
            <div
                className={classes.container}
                style={{ background: backgroundColor }}
            >
                <span className={classes.number}>n° {number}</span>
                <h1 className={classes.name}>{name}</h1>
                <div className={classes.imageContainer}>
                    <img
                        className={classes.image}
                        src={image}
                        alt={`${name}`}
                    />
                </div>
                <div className={classes.types}>
                    {type.reverse().map(e => (
                        <Type type={e} />
                    ))}
                </div>
            </div>
        </Link>
    )
}

export default PokemonCard
