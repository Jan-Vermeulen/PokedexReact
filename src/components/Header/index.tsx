import React from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'

import SearchBar from './SearchBar'
import LanguageSwitcher from './LanguageSwitcher'
import Logo from '../Logo'

import styles from './style'

const Header = () => {
    const useStyles = createUseStyles(styles)
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <div className={classes.topHeader}>
                <Link to="/">
                    <Logo />
                </Link>
                <LanguageSwitcher />
            </div>
            <div>
                <SearchBar />
            </div>
        </div>
    )
}

export default Header
