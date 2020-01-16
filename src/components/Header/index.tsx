import React from 'react'
import { createUseStyles } from 'react-jss'

import SearchBar from '../SearchBar'
import LanguageSwitcher from './LanguageSwitcher'
import Logo from '../Logo'

import styles from './style'

const Header = () => {
    const useStyles = createUseStyles(styles)
    const classes = useStyles({})

    return (
        <div className={classes.container}>
            <Logo />
            <LanguageSwitcher />
            <SearchBar />
        </div>
    )
}

export default Header
