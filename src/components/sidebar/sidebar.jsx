import React from 'react'
import { Typography,Box,Divider,List,ListItem,ListItemButton,ListItemText } from '@mui/material'
import { useSelector,useDispatch } from 'react-redux'
import { updateSelectedRecepie } from '../../redux/slice/selectedRecepie';
import styles from './sidebar.module.css'

const Sidebar = ({handleDrawerClose}) => {
    const dispatch = useDispatch();
    const recepies = useSelector(state=>state.receipes);
    const selectedRecepie = useSelector(state=>state.selectedRecepie);

    const handleClick = (item) => {
      handleDrawerClose();
      dispatch(updateSelectedRecepie(item));
    }
  return (
    <div>
    <Box className={styles.main}>
          <img src='https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg' className={styles.logoImg} />
          <Typography variant="body1" fontSize={22} className={styles.logoHeading}>
            Recepies
          </Typography>
        </Box>
    <Divider sx={{ bgcolor: "white"}} />
    <List sx={{my:3}} disablePadding>
      {!recepies.isLoading && recepies.data?.meals.map((item, index) => (
        <ListItem key={item.idMeal} disablePadding>
          <ListItemButton sx={{ borderRadius: '10px', m: 1, my: 0.3, ...(selectedRecepie?.idMeal === item.idMeal && { backgroundColor: '#D4E0C3' }) }} onClick={()=>handleClick(item)}>
            <ListItemText primaryTypographyProps={{fontSize:14,fontWeight:500, ...(selectedRecepie?.idMeal === item.idMeal ? { color:'#111927' } : { color:'#6C737F' })}} primary={item.strMeal} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </div>
  )
}

export default Sidebar
