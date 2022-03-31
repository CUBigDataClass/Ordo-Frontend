import React from 'react'
import Grid from '@mui/material/Grid';

import classNames from 'classnames';
import styles from './Navigation.module.css';

const Navigation = () => {
    const container = classNames(styles.container, true);
    return (
        <div style={{ color: 'white' }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    Logo
                </Grid>
                <Grid item xs={8}>
                    <div style={{float:'right'}}>
                        <Grid container spacing={15}>
                            <Grid item xs={4}>
                                Tab 1
                            </Grid>
                            <Grid item xs={4}>
                                Tab 2
                            </Grid>
                            <Grid item xs={4}>
                                Tab 3
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Navigation
