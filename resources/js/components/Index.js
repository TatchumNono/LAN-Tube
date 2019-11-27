import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Layout/Home';
import Upload from './Layout/Upload';
import {MuiThemeProvider,createMuiTheme} from '@material-ui/core';
import {pink,purple} from '@material-ui/core/colors';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

const theme = createMuiTheme({
  palette:{
    primary : purple,
    secondary: pink,
   // type : 'dark'
  },
})


function Index() {
    return (
        <div>
         <MuiThemeProvider theme={theme}>
           <BrowserRouter>
               <Switch>
                   <Route exact path='/' component={Home}/>
                   <Route  path='/Upload' component={Upload}/>
               </Switch>
           </BrowserRouter>
         </MuiThemeProvider>
        </div>
    );
}

export default Index;

if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}
