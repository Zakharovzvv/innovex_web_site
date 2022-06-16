import * as React from 'react';
import {useEffect, useState} from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Avatar,
    Button,
    Tooltip,
    MenuItem,
    Stack
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import SearchComponent from "./SearchComponent";
import {IRoute, privateRoutes, initialRoutes, RoutePaths} from "../../router";
import {Link, useNavigate} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {AuthActionCreators} from "../../store/reducers/auth/authActionCreators";
import {useDispatch} from "react-redux";
import {useActions} from "../../hooks/useActions";


const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const {isAuth, user} = useTypedSelector(state => state.authSlice)
 //   const {isAuth, user} = useTypedSelector(state => state.auth)
    const [pages, setPages] = useState<IRoute[]>([])
    const [userMenu, setUserMenu] = useState<IUserMenu[]>([])
    const navigation = useNavigate()
//    const dispatch = useDispatch()
    const {logout}=useActions()

    interface IUserMenu {
        name: string,
        routePath?: string,
        isViewThenLogged?: boolean,
    }

    const initialUserMenu: IUserMenu[] = [
        {name: "Login", routePath: RoutePaths.SIGNIN},
        {name: "Sign up", routePath: RoutePaths.SIGNUP},
        {name: "Logout", isViewThenLogged: true},
    ]

    useEffect(() => {
        //  setPages(isAuth ? publicRoutes : privateRoutes)
        setPages(isAuth ? initialRoutes.filter(rote => rote.isMainMenu != false) : initialRoutes.filter(rote => rote.isMainMenu != false && rote.isPrivate != true))
        setUserMenu(isAuth ? initialUserMenu.filter(item => item.isViewThenLogged === true) : initialUserMenu.filter(item => item.isViewThenLogged != true))
    }, [isAuth])


    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = (event: React.MouseEvent<HTMLElement>, routePath?: string) => {
        setAnchorElUser(null);
        if (routePath) {
            navigation(routePath)
        } else {
 //           // @ts-ignore
 //           dispatch(AuthActionCreators.logout())
            logout()
        }

    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <AdbIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map(({pageName, path}) => (
                                <MenuItem key={path} onClick={handleCloseNavMenu}>
                                    <Link to={path}> <Typography
                                        textAlign="center">{pageName}</Typography></Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                    <Typography
                        variant="h5"
                        noWrap
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map(({pageName, path}) => (
                            <Link to={path} key={path}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                >
                                    {pageName}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    <SearchComponent/>
                    <Box sx={{flexGrow: 0}}>
                        <Stack direction="row" spacing={1}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                                </IconButton>
                            </Tooltip>
                            <Typography sx={{
                                display: "inline-block",
                                verticalAlign: "middle",
                            }}>{user.username}</Typography>
                        </Stack>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {userMenu.map(({name, routePath}) => (
                                <MenuItem key={name} onClick={(event) => handleCloseUserMenu(event, routePath)}>
                                    <Typography textAlign="center">{name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
