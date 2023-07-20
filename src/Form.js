import React, {useContext} from 'react';
import { LanguageContext } from './contexts/LanguageContext';
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {Main, LoginForm} from './styles/FormStyles';

const formPhrases = {
    english: {
        signIn: 'Sign In',
        email: 'Email Address',
        password: 'Password',
        remember: 'Remember Me'
    },
    spanish: {
        signIn: 'Iniciar Sesión',
        email: 'Correo Electrónico',
        password: 'Contraseña',
        remember: 'Recuérdame'
    },
    french: {
        signIn: "S'identifier",
        email: 'Adresse Électronique',
        password: 'Mot de Passe',
        remember: 'Souviens-toi de Moi'
    }
}

function Form() {

    const theme = useTheme();
    const {language, changeLanguage} = useContext(LanguageContext);

    const {signIn, email, password, remember } = formPhrases[language];

    return (
        <Main>
            <Paper
                sx={{
                    marginTop: theme.spacing(8),
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingTop: theme.spacing(2),
                    paddingBottom: theme.spacing(2),
                    paddingLeft: theme.spacing(3),
                    paddingRight: theme.spacing(3)
                }}
            >
                <Avatar
                    sx={{
                        margin: theme.spacing(1),
                        backgroundColor: theme.palette.secondary.main
                    }}
                >
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h5'>{signIn}</Typography>
                <Select value={language} onChange={changeLanguage}>
                    <MenuItem value='english'>English</MenuItem>
                    <MenuItem value='spanish'>Español</MenuItem>
                    <MenuItem value='french'>Français</MenuItem>
                </Select>
                <LoginForm>
                    <FormControl
                        margin='normal'
                        required
                        fullWidth
                    >
                        <InputLabel htmlFor='email'>{email}</InputLabel>
                        <Input 
                            id='email'
                            name='email'
                            autoFocus
                        />
                    </FormControl>
                    <FormControl
                        margin='normal'
                        required
                        fullWidth
                    >
                        <InputLabel htmlFor='password'>{password}</InputLabel>
                        <Input 
                            id='password'
                            name='password'
                        />
                    </FormControl>
                    <FormControlLabel 
                        control={<Checkbox color='primary'/>}
                        label={remember}
                    />
                    <Button
                        variant='contained'
                        type='submit'
                        color='primary'
                        fullWidth
                        sx={{
                            marginTop: theme.spacing(3)
                        }}
                    >
                        {signIn}
                    </Button>
                </LoginForm>
            </Paper>
        </Main>
    )
}

export default Form