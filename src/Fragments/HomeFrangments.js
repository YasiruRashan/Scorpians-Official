import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Avatar, Container } from '@material-ui/core';




export class homeFrangments extends Component {
    constructor(props) {
        super(props)   
        this.state = {
             value :0,
        }
    }


     handleChange = (event, newValue) => {
        this.setState({
            value:newValue
        })
        
      };
    

    render() {
        return (
                <Container maxWidth="md" fixed >
                  <AppBar position="static" color="white">
                    <Tabs
                      value={this.state.value}
                      onChange={this.handleChange}
                      indicatorColor="primary"
                      textColor="primary"
                      variant="scrollable"
                      scrollButtons="auto"
                      aria-label="scrollable auto tabs example"
                    >
                      <Tab icon={<CategoryTab/>} />
                      <Tab icon={<CategoryTab/>} />
                      <Tab icon={<CategoryTab/>} />
                      <Tab icon={<CategoryTab/>} />
                      <Tab icon={<CategoryTab/>} />
                      <Tab icon={<CategoryTab/>} />
                      <Tab icon={<CategoryTab/>} />
                    </Tabs>
                  </AppBar>
                
                </Container>
        );
    }       
}

export const CategoryTab =() =>{
    return(
    <Box>
        <Avatar
        alt="remy Sharp"
        variant ="square" 
        src="/static/images/avatar/1.jpg"
         />
        <Typography variant ="body2">Vege Type</Typography>
    </Box>
    ); 
};


export default homeFrangments;

  
  

