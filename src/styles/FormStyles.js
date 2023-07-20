import { styled } from '@mui/system';

const Main = styled('div')(({theme}) => ({
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
}));

const LoginForm = styled('form')(({theme}) => ({
    width: '100%',
    marginTop: theme.spacing(3)
}));

export {Main, LoginForm}