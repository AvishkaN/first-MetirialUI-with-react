import React from 'react'
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CheckBoxed from "@material-ui/core/Checkbox";
import FormControlledLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField/TextField";
import {makeStyles,ThemeProvider,createMuiTheme} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import SaveIcon from "@material-ui/core/Icon/";
import SaveIcon from "@material-ui/icons/Save";
import DeleatIcon from "@material-ui/icons/Delete";
import {  orange,green,blue } from '@material-ui/core/colors';


import "fontsource-roboto";
import Typography from "@material-ui/core/Typography/Typography";

import Paper from "@material-ui/core/Paper/Paper";
import Grid from "@material-ui/core/Grid/Grid";

import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import MenuIcon from "@material-ui/icons/Menu";



const useStyles=makeStyles({
    root:{
        background: "linear-gradient(45deg,#FE6B8B,#FF8E53)",
        border: 0,
        color: 'white',
        borderRadius:50,
        padding:"0 100px",
    },
    background:{
        background: "rgb(5, 104, 218)",
    }
    ,
    nav:{
        background: "green",
    },
    menuIcon:{
        color: "white",
    }
});

const theme=createMuiTheme({
    typography:{
        h2:{
            fontSize:28,
            color: green[500],
        },
        h4:{
            fontSize:18,
        }
    },
    palette:{
        primary:{
            main:blue[400],
        },
        secondary:{
            main:green[500],
        },
    }
});



function Test() {
    const classes=useStyles();
    return (
    <>

        <AppBar className={classes.nav}>
            <Toolbar>
                <IconButton className={classes.menuIcon}>
                        <MenuIcon/>
                </IconButton>
                <Typography variant="h6">
                    Mui theme
                </Typography>

                <Button
                 variant="contained"
                 color="primary"
                >
                    login
                </Button>
            </Toolbar>
        </AppBar>


    <ThemeProvider theme={theme}>
        <Container maxWidth="lg" >

    <div className={classes.background}>

         <Typography variant="h2">
             Welcome to MUI
         </Typography>
         <Typography variant="h4">
             Learn All  about material ui
         </Typography>

          <Button className={classes.root}>
                    Save
          </Button>


        <ButtonGroup>
                <Button
                    startIcon={<SaveIcon/>}
                    size="large"
                    variant="contained"
                    color="primary"
                    >
                    Save
                </Button>


                <Button
                    startIcon={<DeleatIcon/>}
                    size="large"
                    variant="contained"
                    color="secondary"
                    >
                    Discard
                </Button>
        </ButtonGroup>
        <FormControlledLabel
                control={ <CheckBoxed
                    color="primary"
                    />
                }
                label="Testing CheckBox"
                />
       
       <TextField
            variant="filled"
            color="secondary"
            type="text"
            label="Full Name"
            />


      <Grid container spacing={8} justify="center">
            <Grid item sm={4} xs={12}>
                <Paper style={{height:75,width:'100%'}}/>
            </Grid>
            <Grid item xs={12}  sm={4}>
                <Paper style={{height:75,width:"100%"}}/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper style={{height:75,width:"100%"}}/>
            </Grid>
      </Grid>    

            </div>
        </Container>
    </ThemeProvider>
    </>
    )
}

export default Test;
