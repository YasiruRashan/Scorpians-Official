import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import thunk  from "redux-thunk";
import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer from './Components/Actions/Reducers/rootReducer';
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(
   rootReducer, 
   composeEnhancers(applyMiddleware(thunk)
  ));

  const theme = createMuiTheme({
    palette: {
      primary:{
       main:"#DC3838",
      } 
      
    },
  });  


ReactDOM.render(
  <Provider store={store}>
     <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
