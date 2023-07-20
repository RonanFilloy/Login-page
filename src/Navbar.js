import React, {useContext} from 'react';
import { LanguageContext } from './contexts/LanguageContext';
import { ThemeContext } from './contexts/ThemeContext';
import {useTheme} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Switch from '@mui/material/Switch';
import { Root, Grow, Search, Searchicon } from './styles/NavbarStyles'

const searchBar = {
    english: {
        search: 'Search'
    },
    spanish: {
        search: 'Buscar'
    },
    french: {
        search: 'Chercher'
    }
} 

function Navbar() {

    const theme = useTheme();
    const {language, changeLanguage} = useContext(LanguageContext);
    const {darkTheme, toggleTheme} = useContext(ThemeContext);

    const {search} = searchBar[language];

    return (
        <Root>
            <AppBar position='static' color={darkTheme ? 'default' : 'primary'}>
                <Toolbar>
                    <IconButton
                        color='inherit'
                        sx={{
                            marginLeft: '-12',
                            marginRight: '20'
                        }}
                    >

                    </IconButton>
                    <Typography
                        variant='h6'
                        color='inherit'
                        sx={{
                            display: 'none',
                            [theme.breakpoints.up('sm')]: {
                                display: 'block'
                            }
                        }}
                    >
                        App Title
                    </Typography>
                    <Switch onChange={toggleTheme}/>
                    <Grow/>
                    <Search>
                        <Searchicon>
                            <SearchIcon />
                        </Searchicon>
                        <InputBase 
                            placeholder={`${search}...`}
                            sx={{
                                color: 'inherit',
                                width: '100%',
                                '& input': {
                                    paddingTop: theme.spacing(1),
                                    paddingRight: theme.spacing(1),
                                    paddingLeft: theme.spacing(10),
                                    paddingBottom: theme.spacing(1),
                                    transition: theme.transitions.create('width'),
                                    width: '100%',
                                    [theme.breakpoints.up('sm')]: {
                                        width: '120px',
                                        '&:focus': {
                                            width: '200px'
                                        }
                                    }
                                }
                            }}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Root>
    )
}

export default Navbar