import { styled } from '@mui/system';
import {alpha} from '@mui/system';

const Root = styled('div')(({theme}) => ({
    width: '100%',
    marginBottom: '0',

}));

const Grow = styled('div')(({theme}) => ({
    flexGrow: '1'
}));

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    marginLeft: '0',
    width: '100%',
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    [theme.breakpoints.up('sm')]: {
       marginLeft: theme.spacing(1),
       width: 'auto' 
    }
}));

const Searchicon = styled('div')(({ theme }) => ({
    width: theme.spacing(9),
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

export {Root, Grow, Search, Searchicon}
