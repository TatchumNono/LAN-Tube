import React, { Component } from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import './style.scss';
import './index.css';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar'
import CloseIcon from '@material-ui/icons/Close';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import LinearProgress from '@material-ui/core/LinearProgress';
import Slide from '@material-ui/core/Slide';
import CustomSnack from './CustomSnack';

class Upex extends Component {
  constructor(props) {
    super(props);
      this.state={
        file:null,
        title:'',
        category:'',
        Name:'Click here to Select and Drop files ',
        completed:0,
        snack:false,
        error:false,
        message:''
      }
      this.onSubmitInfo = this.onSubmitInfo.bind(this);
      this.onFileChanges = this.onFileChanges.bind(this);
      this.onCategory = this.onCategory.bind(this);
      this.onTitle = this.onTitle.bind(this);
      this.handleClose = this.handleClose.bind(this);
  }

   onCategory(e){
     this.setState({
       [e.target.name]:e.target.value
     })
   }

   onTitle(e){
     this.setState({
       [e.target.name]:e.target.value
     })
   }

   onSubmitInfo(e){
    //const [percent, setCompleted] = useState(0);
    e.preventDefault();
    const content = new FormData();
    content.append('file',this.state.file);
    content.append('title',this.state.title);
    content.append('category',this.state.category);
    //* Another way
    // const content = {
    //   title : title.title,
    //   category : category.category,
    // }
    //*
    const progress = {
      onUploadProgress : (ProgressEvent) => {
        var percentCompleted = Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total);
        this.setState({completed : percentCompleted});
        console.log({percentCompleted});
        if (percentCompleted == 100) {
          this.setState({snack:true})
        }
      }
    }
    axios.post('http://127.0.0.1:8000/content/store',content,progress)
      .then(response => console.log(response.data))
      .catch(error =>{console.log(error.response.data.message)
         console.log(error.response.data.file)
          this.setState({error:true})
          this.setState({message:error.response.data.message})
      });
    }
  
   onFileChanges(e){
    this.setState({file:e.target.files[0]})
    console.log(e.target.files[0]);
    this.setState({Name:e.target.files[0].name})
   }

   handleClose(event, reason){
    if (reason === 'clickaway') {
      return;
    }
     this.setState({snack:false})
   }

  render() {
    return (
      <div>
        <Paper>
             <form onSubmit={this.onSubmitInfo} encType='multipart/form-data'>
              <div className="inner-container" style={{ display: "flex", flexDirection: "column"}}>
              <div className="sub-header">Drag files here</div>
                <div className="draggable-container">
                  <input
                   type="file" 
                   id="file-browser-input"
                   name="file"
                   onDragOver={(e) => {e.preventDefault();e.stopPropagation();}}
                   onChange={this.onFileChanges}
                   required
                  />
                 <div className="files-preview-container"></div>
                    <div className="helper-text">{this.state.Name}</div>
                 <div className="file-browser-container">
                </div>
              </div>
                <FormControl required>
                 <InputLabel htmlFor="age-required">Category</InputLabel>
                  <Select
                   required
                   name="category"
                   value={this.state.category}
                   onChange={this.onCategory}
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
                   value={this.state.title}
                   onChange={this.onTitle}
                   style={{ margin: 8 ,display:'flex', flexWrap:'wrap'}}
                   placeholder=" A Title for your file"
                   fullWidth
                   margin="normal"
                   margin="normal"
                   InputLabelProps={{shrink: true,}}
                   required
                />
              <Button variant="contained" type='submit' color='secondary'>Upload</Button>
            </div>
          </form>
          <div className='pro'>
           <LinearProgress variant="determinate" color='secondary' value={this.state.completed} />
         </div>
         <Snackbar
           anchorOrigin={{
           vertical: 'bottom',
           horizontal: 'right',
           }}
           open={this.state.snack}
           autoHideDuration={5000}
           onClose={this.handleClose}
           //TransitionComponent={this.state.transition}
           ContentProps={{
            'aria-describedby': 'message-id',
           }}
          >
            <CustomSnack
              onClose={this.handleClose}
              variant="success"
              message="This file was uploaded Successfully!"
           />
          </Snackbar>
          <Snackbar
           anchorOrigin={{
           vertical: 'bottom',
           horizontal: 'right',
           }}
           open={this.state.error}
           autoHideDuration={5000}
           onClose={this.handleClose}
           //TransitionComponent={this.state.transition}
           ContentProps={{
            'aria-describedby': 'message-id',
           }}
          >
            <CustomSnack
              onClose={this.handleClose}
              variant="error"
              message={this.state.message}
           />
          </Snackbar>
        </Paper>
      </div>
    );
  }
}

export default Upex;