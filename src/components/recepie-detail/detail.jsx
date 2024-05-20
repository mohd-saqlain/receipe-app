import { Box,Typography,Paper } from '@mui/material'
import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import styles from './detail.module.css'

const Details = () => {
    const selectedData = useSelector(state=>state.selectedRecepie);
    const imageRef = useRef();
    const nameRef = useRef();
    useGSAP(()=>{
      gsap.from(imageRef.current,{
        x:-700,
        y:200,
        rotate:90,
        duration:1,
        opacity:0.1,
        height:0
      })
      gsap.from(nameRef.current,{
        opacity:0.1,
        duration:2,
      })
    },[selectedData?.strMealThumb])

  return (

      <Box className={styles.main} >
        <Typography variant='h4' sx={{color:'#6C737F'}}>{selectedData?.strMeal ? "Chef calls this " : "Please select recepie to show details" }<span ref={nameRef} style={{color:'#111927'}}>{selectedData?.strMeal || ""}</span></Typography>
        <Box className={styles.imageContainer}>
        <Paper ref={imageRef} elevation={4} component='img' className={styles.image} src={selectedData?.strMealThumb} />
        </Box>
      </Box>

  )
}

export default Details
