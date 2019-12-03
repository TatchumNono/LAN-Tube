import React,{useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';
import {Link} from 'react-router-dom'
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded';
import Collapse from '@material-ui/core/Collapse';
import ListSubheader from '@material-ui/core/ListSubheader';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import axios from 'axios';
import {Skeleton} from '@material-ui/lab';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import ButtonBase from '@material-ui/core/ButtonBase';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { inherits } from 'util';
import './index.css';
import {MuiThemeProvider,createMuiTheme} from '@material-ui/core';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import lightBlue from '@material-ui/core/colors/lightBlue';


const accent = lightBlue[50];

const drawerWidth = 190;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  List1: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageBackdrop: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position:'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 8,
    fontSize: '1.8rem',
    width: 20,
    alignItems: 'center',
    backgroundColor: theme.palette.common.inherits,
    position: 'absolute',
   // bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
    color: 'accent',
  },
}));

function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const [open1, setOpened] = React.useState(false);

  const handleClick = () => {
    setOpened(!open1);
  };

  //getting all th posts with useEffect hook

  const [contents,setContents] = React.useState([]);

  const [loading,setLoading] = React.useState(false);


  useEffect( () =>{
    setLoading(true);
    axios.get('http://127.0.0.1:8000/Content')
    .then(response => {
      console.log(response)
      setContents(response.data)
      setLoading(false);
     // console.log(response.data.length);
     // setLoad(response.data.length)
    })
    .catch(err => {
      console.log(err)
    })
  },[])

  function Media(props) {
    const { loading1 = false } = props;
    return (
      <Grid container wrap='wrap'>
        {(loading ? Array.from(new Array(30)) : contents).map((content, index) => (
          <Box key={index} width={210} marginRight={3} my={5}>

            {content ? (
              <ButtonBase
               focusRipple
               key={content.id}
               className={classes.image}
               focusVisibleClassName={classes.focusVisible}
               style={{width: 210,height: 118}}
               component={Link} to={`Player/${content.id}`}
              >
                <video style={{ width: 210, height: 118,backgroundSize: 'cover'}} alt={content.title} src={content.location}/>
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                   <PlayArrowRoundedIcon  className={classes.imageMarked}/>
                </span>
              </ButtonBase>
            ) : (
              <Skeleton variant="rect" width={210} height={118} />
            )}
  
            {content ? (
              <Box pr={2}>
                <Typography gutterBottom variant="body2">
                  {content.title}
                </Typography>
                <Typography display="block" variant="caption" color="textSecondary">
                  {content.category}
                </Typography>
              </Box>
               ) : (
              <Box pt={0.5}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            )}
          </Box>
        ))}
      </Grid>
    );
  }
  Media.propTypes = {
    loading1: PropTypes.bool,
  };
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <div className='headername'>
          <Typography variant="h6" noWrap>
            LANTUBE
          </Typography>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}>
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <div className={classes.List1}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={event => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <HomeRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={event => handleListItemClick(event, 1)}
          component={Link} to='/Upload'
        >
          <ListItemIcon>
            <PublishRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Upload" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={event => handleListItemClick(event, 2)}
          onClick={handleClick}
        >
          <ListItemIcon>
            <CategoryRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Categories" />
          {open1 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
      </List>
     </div>
      </Drawer>
      <main className={classes.content}>
       <div className={classes.toolbar} />
        <Paper>
          <div className='shift'>
           {loading ?  (<div><Media loading1/></div>) : <Media />}
          </div>
        </Paper>
      </main>
  </div>
  );
}

export default Home;
