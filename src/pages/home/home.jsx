import React,{useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { Menu,ChevronRight } from '@mui/icons-material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Details from '../../components/recepie-detail/detail';
import { useDispatch,useSelector } from 'react-redux';
import Loader from '../../components/loader/loader';
import { fetchRecepies } from '../../redux/slice/recepie';
import Sidebar from '../../components/sidebar/sidebar';
import styles from './home.module.css'

const drawerWidth = 340;

const Home = () => {
  const recepies = useSelector(state=>state.receipes)
  const dispatch = useDispatch();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  useEffect(()=>{
    dispatch(fetchRecepies());
  },[])

  return (
    <> {recepies.isLoading ? <Loader /> : <Box className={styles.main}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor:'#F7F6F0',
          boxShadow:'none',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <Menu />
          </IconButton>
          <Box display='flex' sx={{width:'100%'}} justifyContent='center'>
          <Typography variant="h6" color='#111927'  noWrap component="div">
            Recepie Details
          </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,backgroundColor:'#F7F6F0' },
          }}
        >
          <Sidebar handleDrawerClose={handleDrawerClose}/>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,backgroundColor:'#F7F6F0',border:0 },
          }}
          open
        >
          <Sidebar handleDrawerClose={handleDrawerClose}/>
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, px: 1, width: { sm: `calc(100% - ${drawerWidth}px)` },height:'100vh' }}
      >
        <Toolbar />
        <Details />
      </Box>
    </Box>}
    </>
  );
}


export default Home;
