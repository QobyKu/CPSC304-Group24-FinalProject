import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Hotel from '@material-ui/icons/Hotel';
// import './index.css';
import { Link } from 'react-router-dom';
import { API_CALL } from '../../api_call';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    backgroundColor: 'white',
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  link: {
    zIndex: '999',
  }

  

  
});

var titlestyle = {
  fontSize: '50px',
  width: '200%',
  opacity: '0.5',
}




class SignIn extends React.Component {
  state = {
    username: '',
    password: ''
  }

  loginAPI = async () => {
    let apiCall = API_CALL + 'login/username/' + this.state.username + '/password/' + this.state.password;
    console.log(API_CALL);
    let response = await fetch(apiCall);
    let body = await response.json();
    console.log(body);
    // TODO:
    localStorage.setItem('customerId', body[0].cid)
  }

  // handleRegister =(evt)=> {
  //   console.log(this.state.username);
  //   console.log(this.state.password);
  // }

  updateValue = (evt) =>{
    console.log(evt.target.name)
    this.setState({
      [evt.target.name]: evt.target.value
    })
    console.log(this.state.username);
    console.log(this.state.password);
  }

  handleSignIn = (evt) =>{
    this.loginAPI();
    localStorage.setItem('logInStatus', true);
    localStorage.setItem('status', 'customer');
    console.log('sign in');
  }





  render (){
    const {classes} = this.props;
    return (
      <div className="overlay"> 
          
        <main className={classes.main}>
      
      
      <h1 id='Title' className='title' style = {titlestyle}>Lion's Gate Hotel</h1>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <Hotel />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Username</InputLabel>
              <Input id="username" name="username" autoComplete="email" autoFocus  onChange={this.updateValue}/>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input name="password" type="password" id="password" autoComplete="current-password" onChange = {this.updateValue}/>
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

          <Link to={{ pathname: '/register', state: this.state }}>
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              className={classes.submit}
            >
              Register
            </Button>
            </Link>
            <Link to={{ pathname: '/dashboard', state: this.state }} onClick= {this.handleSignIn}>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              color="primary"
              className={classes.submit}
              onClick={this.handleSignIn}
            >
              Sign in
            </Button>
            </Link>
            <Link to={{ pathname: '/employeelogin', state: this.state }}>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              color="primary"
              className={classes.submit}
            >
              Employee Log In
            </Button>
            </Link>
          </form>
        </Paper>
      </main>
      </div>
    );
  }

}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);