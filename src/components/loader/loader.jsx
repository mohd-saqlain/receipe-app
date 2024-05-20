import React from 'react'
import { Box, CircularProgress } from '@mui/material'
import styles from './loader.module.css'

  const Loader = () => {
    return (
      <Box className={styles.main}>
        <CircularProgress />
      </Box>
    )
  }

export default Loader