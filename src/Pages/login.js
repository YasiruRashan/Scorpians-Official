import React, { Component } from 'react';
import { Container,Box, TextField, CircularProgress, Button } from "@material-ui/core";
import logo from '../media/agrox.png';
import firebase from "../firebase";

class login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email:"",
             password:"",
             show_progress:false
        }
    }
    

    render() {
        return (
        <Container maxWidth="sm">
            <Box bgcolor="primary.main" boxShadow="2" borderRadius="15px" textAlign="center" p="24px" mt="50px"> 
                <img src={logo} />
                <TextField id="outlined-size-small" color="secondary" variant="outlined" fullWidth margin="normal" size="small"
                    label="Email"
                />
                <TextField id="outlined-size-small" color="secondary" type="password" variant="outlined" fullWidth margin="normal" size="small"
                    label="Password"
                />

                <br/><br/>
                {this.state.show_progress?
                (<CircularProgress size={24} thickness={4} color="#d32f2f"/>
                ):null
            }

                <br/><br/>
                <Button disableElevation variant="contained" color="secondary" fullWidth>
                    Log In
                </Button>
            </Box>
        </Container>
        );
    }
}

export default login
