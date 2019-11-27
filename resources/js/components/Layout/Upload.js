import React,{useState} from 'react';
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
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import './style.scss';
import {AnchorButton, Intent} from "@blueprintjs/core";
import axios from 'axios';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
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
  root10: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function Upload() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [open1, setOpened] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleClick = () => {
    setOpened(!open1);
  };

  //state of the uploqded informations

  const [title , setTitle] = React.useState({title:''});

  function SetTitle(e){
     setTitle({title:e.target.value})
  }

  const [category , setCat] = React.useState({category:''});

  function SetCategory(e){
    setCat({category:e.target.value})
 }

  const [File, setFile] = React.useState({file:null});

  function onFileChanges(e){
    setFile({file:e.target.files[0]})
    console.log(e.target.files[0]);
    setDropName({Name:e.target.files[0].name})
  }

  const [dropName,setDropName] = useState({Name:'Click here to Select a File then Drag and Drop'})

  //function to upload the file,title and category

  const [percent, setCompleted] = useState(0);//state of the loaing animation

  function onSubmitInfo(e){
    //const [percent, setCompleted] = useState(0);
    e.preventDefault();
    const content = new FormData();
    content.append('file',File.file,File.file.name);
    content.append('title',title.title);
    content.append('category',category.category);
    //* Another way
    // const content = {
    //   title : title.title,
    //   category : category.category,
    // }
    //*
    const progress = {
      onUploadProgress :(ProgressEvent) => {
        var percentCompleted = Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total);
        setCompleted({percent : percentCompleted});
        console.log(percentCompleted);
        console.log(percent);
      }
    }
    axios.post('http://127.0.0.1:8000/content/store',content,progress)
      .then(response => console.log(response.data))
      .catch(error => console.log(error.response));
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
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
          <Typography variant="h6" noWrap>
            LANTUBE
          </Typography>
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
        open={open}
      >
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
          component={Link} to="/"
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
          component={Link} to="/Upload"
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
          <ListItem
           button
           className={classes.nested}
           selected={selectedIndex === 3}
           onClick={event => handleListItemClick(event, 3)}
          >
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
           <form onSubmit={onSubmitInfo} encType='multipart/form-data'>
            <div className="inner-container" style={{ display: "flex", flexDirection: "column"}}>
              <div className="sub-header">Drag files here</div>
                <div className="draggable-container">
                  <input
                   type="file"
                   id="file-browser-input"
                   name="file"
                   onDragOver={(e) => {e.preventDefault();e.stopPropagation();}}
                   onChange={onFileChanges}
                   required
                  />
                 <div className="files-preview-container"></div>
                    <div className="helper-text">{dropName.Name}</div>
                 <div className="file-browser-container">
                </div>
              </div>
                <FormControl required>
                 <InputLabel htmlFor="age-required">Category</InputLabel>
                  <Select
                   required
                   name="category"
                   value={category.category}
                   onChange={SetCategory}
                   inputProps={{id: 'category-required',}}
                   style={{ margin: 8 ,display:'flex', flexWrap:'wrap',minWidth: 120,paddingTop:5,paddingBottom:5}}>
                   <MenuItem>
                    <em>None</em>
                   </MenuItem>
                   <MenuItem value='Music'>Music</MenuItem>
                   <MenuItem value='Film'>Film</MenuItem>
                   <MenuItem value='Series'>Series</MenuItem>
                   <MenuItem value='Tutorial'>Tutorials</MenuItem>
                   <MenuItem value='Others'>Others</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                   id="standard-full-width"
                   label="Title"
                   name='title'
                   value={title.title}
                   onChange={SetTitle}
                   style={{ margin: 8 ,display:'flex', flexWrap:'wrap'}}
                   placeholder=" A Title of the file"
                   fullWidth
                   margin="normal"
                   margin="normal"
                   InputLabelProps={{shrink: true,}}
                   required
                />
              <Button variant='contained' type='submit' color='secondary'>Upload</Button>
            </div>
          </form>
          <div className={classes.root10}>
           <LinearProgress variant="determinate" color='secondary' value={percent} />
         </div>
        </Paper>
      </main>
    </div>
  );
}

export default Upload;
