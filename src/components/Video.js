import React from 'react'
import shoevideo from '../videos/shoevideo.mp4'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../App.css'

const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(1),

      flexDirection: 'column',
      justifyContent: 'flex-end',
      textAlign: 'right',
      display: 'flex',
      position: "relative",
      zIndex: 1,
      marginLeft: 0,
      marginRight: "6px",
      marginTop: "6px",
      maxWidth: "100%",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
      padding: "8px 28px",
      borderRadius: '20px',
      background: '#fff',
      '&:hover': {
        background: '#e8e8e8',
      },
      color: '#111',
      fontSize: '15px',
      width: 'fit-content',
      height: 'fit-content',
      fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
     
    },
  }));

function Video() {
    const classes = useStyles();
    return (
        <div className="container">
           <video autoPlay playsInline loop muted src={shoevideo} /> 
           <h1 className="h1">READY YOUR RUN

</h1><Button className={classes.root}variant="contained" color="primary">
        Shop
      </Button>
        </div>
    )
}

export default Video
