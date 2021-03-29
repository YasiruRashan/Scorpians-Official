import React, { Component } from 'react';
import { Container,Box, TextField, CircularProgress, Button } from "@material-ui/core";
import logo from '../media/agrox.png';
import firebase, {  } from "../firebase";

class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email:"",
             password:"",
             show_progress:false
        };

        this.handleChange = this.handleChange.bind()
        this.login = this.login.bind()
    }
    
    handleChange = (e) =>{
        this.setState({
          [e.target.name]:e.target.value
        })
    }

    login = () =>{
        let valid_data=true;
        this.state.email_error = null;
        this.state.password_error = null;

        if(this.state.email===""){
            this.state.email_error = "Required!!";
            valid_data=false
        }

        if(this.state.password===""){
            this.state.password_error = "Required!!";
            valid_data=false
        }

        if(valid_data){
            this.state.show_progress=true;
        }

        this.setState({
            update : true
        })

        if(valid_data){
           // firebase.firestore().collection("Users").where('email','==',this.state.email).where('IsAdmin','==',true).get().then((querySnapshot) => {
               //if(!querySnapshot.empty){
                    firebase.auth().signInWithEmailAndPassword(
                        this.state.email, 
                        this.state.password
                    ).then(res=>{
                        this.props.history.replace("/");
                    }).catch(err=>{
                        if (err.code==='auth/wrong-password'){
                            this.state.password_error="Incorrect Password!"
                        }
                        this.setState({
                            show_progress:false,
                        });
                    })
               // }else{
                    //this.state.email_error = "Not Allowed!!"
                  //  this.setState({
                  //      show_progress:false,
                 //   });
            //    }
           // })
        }
    }



    render() {
        return (
        <Container maxWidth="sm">
            <Box bgcolor="primary.main" boxShadow="2" borderRadius="15px" textAlign="center" p="24px" mt="50px"> 
                <img src={logo} />
                <TextField id="outlined-size-small" color="secondary" variant="outlined" fullWidth margin="normal" size="small"
                    label="Email"
                    name="email"
                    onChange={this.handleChange}
                    error={this.state.email_error!=null}
                    helperText={this.state.email_error}
                />
                <TextField id="outlined-size-small" color="secondary" type="password" variant="outlined" fullWidth margin="normal" size="small"
                    label="Password"
                    name="password"
                    onChange={this.handleChange}
                    error={this.state.password_error!=null}
                    helperText={this.state.email_error}
                />

                <br/><br/>
                {this.state.show_progress?
                (<CircularProgress size={24} thickness={4} color="secondary"/>
                ):null
            }

                <br/><br/>
                <Button disableElevation variant="contained" color="secondary" fullWidth onClick={this.login}>
                    Log In
                </Button>
            </Box>
        </Container>
        );
        }
    }


export default Login
