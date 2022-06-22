import * as React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import AdbIcon from '@mui/icons-material/Adb'
import MenuIcon from '@mui/icons-material/Menu'
import PieChartIcon from '@mui/icons-material/PieChart'
import { Link } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

import { MENU_INFO_LIST } from '../../constans/menu'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

function ResponsiveAppBar() {
 const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
 const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

 const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorElNav(event.currentTarget)
 }
 const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorElUser(event.currentTarget)
 }

 const handleCloseNavMenu = () => {
  setAnchorElNav(null)
 }

 const handleCloseUserMenu = () => {
  setAnchorElUser(null)
 }

 return (
  <AppBar position="sticky" color="default">
   <Container maxWidth="xl">
    <Toolbar disableGutters>
     <PieChartIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
     <Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
       mr: 2,
       display: { xs: 'none', md: 'flex' },
       fontWeight: 700,
       color: 'inherit',
       textDecoration: 'none',
      }}
     >
      LMW-MARKET
     </Typography>

     <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
       size="large"
       aria-label="account of current user"
       aria-controls="menu-appbar"
       aria-haspopup="true"
       onClick={handleOpenNavMenu}
       color="inherit"
      >
       <MenuIcon />
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
        display: { xs: 'block', md: 'none' },
       }}
      >
       {MENU_INFO_LIST.map(({ path, menuName, icon }) => (
        <MenuItem key={path} onClick={handleCloseNavMenu}>
         <Typography textAlign="center">
          <Link
           component={RouterLink}
           to={path}
           underline="none"
           key={path}
           onClick={handleCloseNavMenu}
           sx={{ my: 2, color: 'inherit', display: 'flex', paddingX: '0.765rem', alignItems: 'center' }}
          >
           {menuName}&nbsp;
           {icon && icon}
          </Link>
         </Typography>
        </MenuItem>
       ))}
      </Menu>
     </Box>
     <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
     <Typography
      variant="h5"
      noWrap
      component="a"
      href="/"
      sx={{
       mr: 2,
       display: { xs: 'flex', md: 'none' },
       flexGrow: 1,
       fontFamily: 'monospace',
       fontWeight: 700,
       letterSpacing: '.3rem',
       color: 'inherit',
       textDecoration: 'none',
      }}
     >
      LMW-MARKET
     </Typography>
     <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {MENU_INFO_LIST.map(({ path, menuName, icon }) => (
       <Link
        component={RouterLink}
        to={path}
        underline="none"
        key={path}
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: 'inherit', display: 'flex', paddingX: '0.765rem', alignItems: 'center' }}
       >
        {menuName}&nbsp;
        {icon && icon}
       </Link>
      ))}
     </Box>

     <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
       <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
       </IconButton>
      </Tooltip>
      <Menu
       sx={{ mt: '45px' }}
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
       {settings.map((setting) => (
        <MenuItem key={setting} onClick={handleCloseUserMenu}>
         <Typography textAlign="center">{setting}</Typography>
        </MenuItem>
       ))}
      </Menu>
     </Box>
    </Toolbar>
   </Container>
  </AppBar>
 )
}
export default ResponsiveAppBar
