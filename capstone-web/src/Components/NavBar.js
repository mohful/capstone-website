import React from 'react'
import { Box, Button, Toolbar, AppBar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import logo from './logo.png'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    field: {
        marginTop: 120,
        marginBottom: 150,
        display: 'block'
    },
    logo: {
        maxWidth: 60,
        marginRight: 'auto',
    }
}))

export const NavBar = ({children}) => {

    const classes = useStyles()
    const navigate = useNavigate()
    
    return (
        <div className={classes.root}>
            <Box>
                <AppBar sx={{color:'#FFFFFF'}} position='fixed'>
                    <Toolbar>
                        <img src={logo} alt='logo' className={classes.logo} />
                        <Box sx={{ flexGrow: 1 }} />
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <Button variant='filled' onClick={(e) => navigate('/about')}> About </Button>
                                <Button variant='filled' onClick={(e) => navigate('/timeline')}> Timeline </Button>
                                <Button variant='filled' onClick={(e) => navigate('/project-description')}> Description </Button>
                                <Button variant='filled' onClick={(e) => navigate('/documents')}> Documents </Button>
                                <Button variant='filled' onClick={(e) => navigate('/contact')}> Contact Us </Button>
                            </Box>
                        <Toolbar />
                    </Toolbar>
                </AppBar>
            </Box>
            <div className={classes.field}>
                { children }
            </div>
        </div>
    )
  }