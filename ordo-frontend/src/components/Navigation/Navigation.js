import React from 'react'

import classNames from 'classnames';
import styles from './Navigation.module.css';
import { Box, Grid, Typography } from '@mui/material';

const Navigation = () => {
    const container = classNames(styles.container, true);
    return (
        <div style={{ color: 'white' }}>
            <Box sx={{ mt:1, ml:5, mr:5 }}>
                <Grid container wrap="nowrap" spacing={2} alignItems="center">
                    <Grid item xs={3}>
                        <Typography style={{overflowWrap:'word-break'}} variant="h3" color="#e50914">Ordo</Typography>
                    </Grid>
                    <Grid item xs={6}></Grid>
                    <Grid item xs={3}>
                        <Grid container wrap="nowrap" spacing={5}>
                            <Grid item xs={4}>
                                <Typography style={{overflowWrap:'word-break'}}>Home</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography style={{overflowWrap:'word-break'}}>Movies</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography style={{overflowWrap:'word-break'}}>Analysis</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Navigation
